/**
 * This is a simple typescript file on which `eslint` with generated config is ran
 * just to test that `eslint-config-contactlab` is formally correct
 */

import * as path from 'path';

export function test(): string {
  return path.join('this', 'is', 'a', 'simple', 'test');
}
