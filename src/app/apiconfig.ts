export const restApi='http://209.97.130.34/lectrefy-api-service/'

export const campaignapis={
     addcampaigns:restApi+'api/v1.0/campaigns',
     getcampaigns:restApi+'api/v1.0/campaigns',
     getsinglecampaign:restApi+'api/v1.0/campaigns/',
     campaignfilter:restApi+'api/v1.0/campaigns/',
     update:restApi+'api/v1.0/campaigns/'    
}

export const contentApis={
        getall:restApi+'api/v1.0/contents',
        add:restApi+'api/v1.0/contents',
        getSingle:restApi+'api/v1.0/contents/',
        filter:restApi+'contents/filter?description=',
        update:restApi+'api/v1.0/contents/'
}