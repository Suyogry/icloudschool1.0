import { TestBed } from '@angular/core/testing';

import { FileHandleService } from './file-handle.service';

describe('FileHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileHandleService = TestBed.get(FileHandleService);
    expect(service).toBeTruthy();
  });
});
