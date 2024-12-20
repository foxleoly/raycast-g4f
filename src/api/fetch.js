/// This is the custom fetch function used in this extension.
/// It is a wrapper around the node-fetch library, with added support for proxies.

import default_fetch from "node-fetch";
import { HttpProxyAgent } from "http-proxy-agent";
import { Preferences } from "./preferences.js";

const devMode = Preferences["devMode"] || false;

/**
 * Custom fetch function with optional proxy support
 * @param {string} url - The URL to fetch
 * @param {Object} [options={}] - Fetch options
 * @param {string|null} [proxy=null] - Proxy URL
 * @returns {Promise<Response>} - Fetch response
 */
async function fetchWithProxy(url, options = {}, proxy = null) {
  if (proxy) {
    options.agent = new HttpProxyAgent(proxy);
  }
  if (devMode) {
    console.log(`${options.method || "GET"} : ${url}, proxy: ${proxy}`);
  }

  const response = await default_fetch(url, options);
  if (devMode) {
    console.log(`response:\n ${response}, status: ${response.status} : ${response.statusText}`);
    if (!response.ok) {
      console.log(`error: ${await response.text()}`);
    }
  }

  return response;
}

async function fetch(url, options = {}) {
  let proxy = Preferences["proxyURL"] || null; // load proxy from preferences
  return fetchWithProxy(url, options, proxy);
}

export default fetch;
