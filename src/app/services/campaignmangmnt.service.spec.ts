import { TestBed } from '@angular/core/testing';

import { CampaignmangmntService } from './campaignmangmnt.service';

describe('CampaignmangmntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignmangmntService = TestBed.get(CampaignmangmntService);
    expect(service).toBeTruthy();
  });
});
