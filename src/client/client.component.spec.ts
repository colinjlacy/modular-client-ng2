/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ClientComponent } from './client.component.ts';

beforeEachProviders(() => [ClientComponent]);

describe('App: ModularClientNg2', () => {
  it('should create the client',
      inject([ClientComponent], (app: ClientComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'client works!\'',
      inject([ClientComponent], (app: ClientComponent) => {
    expect(app.title).toEqual('client works!');
  }));
});
