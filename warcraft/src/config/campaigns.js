import * as CONSTANTS from "./constants.js";
import campaign1 from "../campaigns/CampaignHuman1.js";
import campaign2 from "../campaigns/CampaignHuman2.js";
import campaign3 from "../campaigns/CampaignHuman3.js";
import campaign4 from "../campaigns/CampaignHuman4.js";
import campaign5 from "../campaigns/CampaignHuman5.js";
import campaign6 from "../campaigns/CampaignHuman6.js";
import campaign7 from "../campaigns/CampaignHuman7.js";
import campaign_orc1 from "../campaigns/CampaignOrc1.js";
import campaign_orc2 from "../campaigns/CampaignOrc2.js";
import campaign_orc3 from "../campaigns/CampaignOrc3.js";
import campaign_orc4 from "../campaigns/CampaignOrc4.js";
import campaign_orc5 from "../campaigns/CampaignOrc5.js";
import campaign_orc6 from "../campaigns/CampaignOrc6.js";
import campaign_orc7 from "../campaigns/CampaignOrc7.js";


export default {
    [CONSTANTS.RACE_HUMAN]: [
        campaign1,
        campaign2,
        campaign3,
        campaign4,
        campaign5,
        campaign6,
        campaign7,
    ],

    [CONSTANTS.RACE_ORC]: [
        campaign_orc1,
        campaign_orc2,
        campaign_orc3,
        campaign_orc4,
        campaign_orc5,
        campaign_orc6,
        campaign_orc7,
    ],
}
