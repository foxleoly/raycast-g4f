/// This module contains all the information (i.e. constants) about the providers.

/// Provider modules
import { NexraProvider } from "../Providers/nexra.js";
import { DeepInfraProvider } from "../Providers/deepinfra.js";
import { BlackboxProvider } from "../Providers/blackbox.js";
import { DuckDuckGoProvider } from "../Providers/duckduckgo.js";
import { BestIMProvider } from "../Providers/bestim.js";
import { AI4ChatProvider } from "../Providers/ai4chat.js";
import { DarkAIProvider } from "../Providers/darkai.js";
import { MhysticalProvider } from "../Providers/mhystical.js";
import { PizzaGPTProvider } from "../Providers/pizzagpt.js";
import { MetaAIProvider } from "../Providers/metaAI.js";
import { ReplicateProvider } from "../Providers/replicate.js";
import { PhindProvider } from "../Providers/phind.js";
import { GeminiProvider } from "../Providers/google_gemini.js";

export const providers = [
  NexraProvider,
  DeepInfraProvider,
  BlackboxProvider,
  DuckDuckGoProvider,
  BestIMProvider,
  AI4ChatProvider,
  DarkAIProvider,
  MhysticalProvider,
  PizzaGPTProvider,
  MetaAIProvider,
  ReplicateProvider,
  PhindProvider,
  GeminiProvider,
];

// { provider internal name, {provider object, model, stream, extra options} }
// to be initialised in init.js
export const providers_info = {};

/// Providers that support file uploads
export const file_supported_providers = [GeminiProvider, DeepInfraProvider];

/// Providers that support function calling
export const function_supported_providers = [DeepInfraProvider, GeminiProvider];

/// Model aliases
/// Each model is aliased to an array of providers that support it
// prettier-ignore
export const model_aliases = {
  "gpt-4o": [NexraProvider, BlackboxProvider, DarkAIProvider],
  "gpt-4": [AI4ChatProvider, NexraProvider],
  "gpt-4o-mini": [DuckDuckGoProvider, PizzaGPTProvider],
  "claude-3.5-sonnet": [], // disabled: BlackboxProvider
  "claude-3-opus": [],
  "claude-3-haiku": [DuckDuckGoProvider],
  "gemini-pro": [GeminiProvider, NexraProvider, BlackboxProvider],
  "gemini-flash": [GeminiProvider, BlackboxProvider],
  "gemini-exp": [GeminiProvider],
  "gemini-thinking": [GeminiProvider],
  "llama-3-8b": [ReplicateProvider],
  "llama-3-70b": [ReplicateProvider],
  "llama-3.1-405b": [BlackboxProvider, ReplicateProvider, MetaAIProvider, DeepInfraProvider],
  "llama-3.1-70b": [BlackboxProvider, DeepInfraProvider, DuckDuckGoProvider, NexraProvider],
  "llama-3.1-8b": [DeepInfraProvider],
  "llama-3.2-90b": [DeepInfraProvider],
  "llama-3.2-11b": [DeepInfraProvider],
  "llama-3.3-70b": [BlackboxProvider, DeepInfraProvider],
  "qwen-2.5-72b": [DeepInfraProvider],
  "qwen-2.5-coder-32b": [DeepInfraProvider],
  "qwq-32b-preview": [DeepInfraProvider, BlackboxProvider],
  "wizardlm-2-8x22b": [DeepInfraProvider],
  "deepseek-v3": [DeepInfraProvider],
  "deepseek-r1": [DeepInfraProvider, BlackboxProvider],
  "mixtral-8x7b": [DuckDuckGoProvider, ReplicateProvider],
};
