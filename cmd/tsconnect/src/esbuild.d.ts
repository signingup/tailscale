// Copyright (c) 2022 Tailscale Inc & AUTHORS All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * @fileoverview Type definitions for types generated by the esbuild build
 * process.
 */

declare module "*.wasm" {
  const path: string
  export default path
}

declare const DEBUG: boolean