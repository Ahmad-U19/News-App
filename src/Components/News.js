import React, { Component } from 'react'
import NewsItems from './NewsItem'

export class News extends Component {
  articles=[
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Suvashree Ghosh",
            "title": "Bitcoin Drops After Trump Executive Order Disappoints Market - Bloomberg",
            "description": "A simmering tension in the crypto industry resurfaced after President Donald Trump signed a long-awaited order creating a strategic Bitcoin reserve and an additional stockpile of other digital assets.",
            "url": "https://www.bloomberg.com/news/articles/2025-03-07/trump-signs-order-creating-bitcoin-reserve-and-crypto-stockpile",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/imdUzS8VqSUI/v0/1200x800.jpg",
            "publishedAt": "2025-03-07T13:11:20Z",
            "content": "A simmering tension in the crypto industry resurfaced after President Donald Trump signed a long-awaited order creating a strategic Bitcoin reserve and an additional stockpile of other digital assets… [+217 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Barron's",
            "title": "Broadcom, Nvidia, HPE, Gap, Walgreens, Costco, Intuitive Machines, and More Movers - Barron's",
            "description": null,
            "url": "https://www.barrons.com/articles/stock-market-movers-a8bcae99",
            "urlToImage": null,
            "publishedAt": "2025-03-07T11:06:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Man will be first to face US firing squad in 15 years - BBC.com",
            "description": "Brad Sigmon will be the first person in the US to be killed by firing squad in 15 years.",
            "url": "https://www.bbc.com/news/articles/c86p0wzjv0do",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9d6c/live/5c495250-faad-11ef-afa9-ddb9d47ff65a.jpg",
            "publishedAt": "2025-03-07T10:07:05Z",
            "content": "A South Carolina prison inmate convicted of killing his ex-girlfriend's parents with a baseball bat will be the first person in the US to be executed by firing squad in 15 years.\r\nIf Brad Sigmon's ex… [+4605 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Gawon Bae, Yoonjung Seo, Jessie Yeung",
            "title": "South Korean court orders release of President Yoon Suk Yeol as he awaits impeachment ruling - CNN",
            "description": "South Korean President Yoon Suk Yeol, who lawmakers voted to impeach and was indicted on criminal charges for declaring martial law last December, was cleared to be released from detention on Friday.",
            "url": "https://www.cnn.com/2025/03/07/asia/south-korea-yoon-suk-yeol-released-detention-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap25044051727771.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2025-03-07T09:25:00Z",
            "content": "South Korean President Yoon Suk Yeol, who lawmakers voted to impeach and was indicted on criminal charges for declaring martial law last December, was cleared to be released from detention on Friday.… [+3300 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Kevin O'Connor",
            "title": "Luka, LeBron leave OT with WIN, Brunson leaves LIMPING | Kevin O'Connor Show - Yahoo Sports",
            "description": "Kevin O'Connor and Tom Haberstroh dive into the Lakers' thrilling overtime victory against the Knicks in this episode of The Kevin O'Connor Show.",
            "url": "https://sports.yahoo.com/nba/article/luka-lebron-leave-ot-with-win-brunson-leaves-limping--kevin-oconnor-show-080738085.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/grkiCv8XC8f1opZQnD5Uzg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2025-03/ca420fe0-fb2a-11ef-b7e9-bcb87efb5c8c",
            "publishedAt": "2025-03-07T08:07:38Z",
            "content": "Kevin O'Connor and Tom Haberstroh dive into the Los Angeles Lakers' thrilling overtime victory against the New York Knicks in this episode of The Kevin O'Connor Show. How concerned should Knicks fans… [+1867 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Hyung-jin Kim",
            "title": "South Korea stops some military drills after accidental bombing in possible setback to US exercises - The Associated Press",
            "description": "South Korea's military says it has suspended the training flights of air force aircraft and all live-fire drills after two fighter jets accidentally bombed a civilian area. Experts said Friday the suspensions will likely be a setback to the annual military tr…",
            "url": "https://apnews.com/article/south-korea-fighter-jets-accidental-bombing-us-drills-6c9b9aa634ca7a34c813b9b8b3e64191",
            "urlToImage": "https://dims.apnews.com/dims4/default/8d95e18/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdb%2Fd5%2F1c090bd5c687479c46cf804350ed%2F241ecd6b17804c8a8256bd06880c507e",
            "publishedAt": "2025-03-07T07:34:00Z",
            "content": "SEOUL, South Korea (AP) South Korea suspended the training flights of air force aircraft and all live-fire drills following its fighter jets accidental bombing of a civilian area, officials said Frid… [+3923 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Yeo Boon Ping",
            "title": "CNBC Daily Open: Trump paused tariffs for some imports — but Nasdaq enters correction territory - CNBC",
            "description": "The Trump administration seems to be doubling down on tariffs, even as it acknowledges — and dismisses — the repercussions of such levies.",
            "url": "https://www.cnbc.com/2025/03/07/cnbc-daily-open-more-tariff-pauses-but-nasdaq-enters-correction.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108112335-17412962782025-03-06t211202z_784510376_rc2v7dats9oe_rtrmadp_0_usa-trump.jpeg?v=1741296311&w=1920&h=1080",
            "publishedAt": "2025-03-07T07:30:01Z",
            "content": "U.S. President Donald Trump expanded his tariff pause to goods coming in from Canada and Mexico, so long as they satisfy terms of the United States-Mexico-Canada Agreement, a trade deal between all c… [+5896 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "The Associated Press",
            "title": "EU leaders back new military spending plans at Ukraine summit - The Associated Press",
            "description": "European Union leaders committed to a massive step in defense cooperation following decades of hesitation, spurred on by President Donald Trump’s announcement that U.S. was suspending aid to Ukraine.",
            "url": "https://apnews.com/live/ukraine-europe-eu-security-summit-updates",
            "urlToImage": "https://dims.apnews.com/dims4/default/0284a54/2147483647/strip/true/crop/5737x3227+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1b%2F94%2Fe7f41d2949edb673cbf4dee9a2e8%2Fap25065817642951.jpg",
            "publishedAt": "2025-03-07T07:22:27Z",
            "content": "The EUs 27 leaders have finished a working lunch with Ukrainian President Volodymyr Zelenskyy. Meal-time discussions are unscripted, and the heads of state and government can freely speak, often in E… [+1017 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Field Gulls"
            },
            "author": "Mookie Alexander",
            "title": "‘We’re talking to a ton of teams’ - Seahawks GM John Schneider on DK Metcalf trade request - Field Gulls",
            "description": "Schneider confirmed that trade talks are happening following Metcalf’s request, but of course didn’t publicly slam the door shut on the idea that DK will stay with Seattle.",
            "url": "https://www.fieldgulls.com/2025/3/6/24379751/seattle-seahawks-gm-john-schneider-dk-metcalf-trade-request-nfl-news",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/lYeqrNxFEQWF8jrocpZGJktg3vU=/0x0:4458x2334/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25900880/2155942621.jpg",
            "publishedAt": "2025-03-07T06:39:26Z",
            "content": "One day after news of DK Metcalfs trade request was revealed, Seattle Seahawks general manager John Schneider addressed this major twist in the offseason.\r\nSchneider made his weekly appearance on Sea… [+2272 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Adam Taylor, Heba Farouk Mahfouz, Gerry Shih",
            "title": "Trump administration’s direct talks with Hamas break an old taboo - The Washington Post",
            "description": "Israeli Prime Minister Benjamin Netanyahu was not informed of the talks before they took place and was caught off guard, said an Israeli with knowledge of the matter.",
            "url": "https://www.washingtonpost.com/world/2025/03/06/hamas-talks-trump-gaza-netanyahu/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YWXJSV5GMT32KUKQD52YR5OEQQ.JPG&w=1440",
            "publishedAt": "2025-03-07T06:11:18Z",
            "content": "Under the Trump administration, U.S. officials have begun meeting directly with Hamas, breaking a long-standing although sometimes flexible U.S. policy against talking with groups Washington has desi… [+4647 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "M3 Ultra on par with M4 Max in CPU performance based on benchmark test - 9to5Mac",
            "description": "Apple this week announced a new generation of Mac Studio, and surprisingly it is available with two different chip families:...",
            "url": "https://9to5mac.com/2025/03/06/m3-ultra-m4-max-chip-benchmark/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/03/mac-studio-m4-max-m3-ultra.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2025-03-07T05:23:00Z",
            "content": "Apple this week announced a new generation of Mac Studio, and surprisingly it is available with two different chip families: M3 Ultra and M4 Max. While the company claims that the M3 Ultra is up to t… [+2586 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Morgan Lee",
            "title": "Investigation advances into Gene Hackman's mysterious death, with update by New Mexico authorities - The Associated Press",
            "description": "Authorities are preparing to reveal more information about the investigation into the deaths of actor Gene Hackman and his wife, Betsy Arakawa. The couple's partially mummified bodies were discovered last week at their home in the hills of Santa Fe, New Mexic…",
            "url": "https://apnews.com/article/gene-hackman-death-betsy-arakawa-investigation-c94b2cb4d5d7aec9a1a39a81b46dbdf9",
            "urlToImage": "https://dims.apnews.com/dims4/default/482cd93/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2F4a%2Fb6c13adfbb253815acb227661943%2Ff3a1e1f25b704f41b595a8a8145b6b4e",
            "publishedAt": "2025-03-07T05:15:00Z",
            "content": "SANTA FE, N.M. (AP) Authorities are set to reveal more information about an investigation into the deaths of actor Gene Hackman and wife Betsy Arakawa, whose partially mummified bodies were discovere… [+2179 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Ellen Knickmeyer, Michael Kunzelman",
            "title": "Judge orders Trump administration to speed payment of USAID and State Dept. debts - The Associated Press",
            "description": "A federal judge has given the Trump administration until Monday to speed up payment toward some of nearly $2 billion owed to partners of the U.S. Agency for International Development and the State Department. Thursday's decision thaws the administration’s six…",
            "url": "https://apnews.com/article/usaid-trump-foreign-aid-funding-freeze-02e8ed553e55c79c43fe8811de952d02",
            "urlToImage": "https://dims.apnews.com/dims4/default/f1a0cf4/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F64%2F4a%2F0aeda97f6d2885bb5501a86754aa%2F919b699a701c448196ba007336e68480",
            "publishedAt": "2025-03-07T04:58:00Z",
            "content": "WASHINGTON (AP) A federal judge on Thursday ordered the Trump administration to speed up its payment on some of nearly $2 billion in debts to partners of the U.S. Agency for International Development… [+3668 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Ben Schoon",
            "title": "Pixel 9a’s new purple color and tiny camera bump shown off in latest leaks [Gallery] - 9to5Google",
            "description": "Yet another Pixel 9a leak has hit the web, this time showing off the purple color and the tiny camera bump on Google's device.",
            "url": "http://9to5google.com/2025/03/06/google-pixel-9a-purple-leak/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2025/03/pixel-9a-camera-bump-blass-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2025-03-07T02:55:00Z",
            "content": "Ahead of its upcoming launch, another batch of Pixel 9a leaks have hit the web, primarily showcasing the purple color of Google’s mid-range device.\r\nPosted by Evan Blass on a private Twitter/X accoun… [+1142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Financial Times"
            },
            "author": "Rafe Uddin, Stephen Morris",
            "title": "SpaceX Starship rocket explodes minutes after launch - Financial Times",
            "description": "Second straight incident is setback to Elon Musk’s ambitions to build vessel capable of reaching Mars",
            "url": "https://www.ft.com/content/00a535cc-a890-4525-a346-dbafb1d2bcfb",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2698662c-0dbe-4069-a1d0-e41bef90f5f7.jpg?source=next-barrier-page",
            "publishedAt": "2025-03-07T02:37:30Z",
            "content": "Complete digital access to quality analysis and expert insights, complemented with our award-winning Weekend Print edition.\r\n\u003Cul\u003E\u003Cli\u003E\u003C/li\u003EEverything in Print\u003Cli\u003E\u003C/li\u003EWeekday Print Edition\u003Cli\u003E\u003C/li\u003EFT … [+202 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ABC News",
            "title": "Trump tells Cabinet members that they're in charge, not Musk: Sources - ABC News",
            "description": null,
            "url": "https://abcnews.go.com/Politics/trump-tells-cabinet-charge-musk-sources/story?id\\\\u003d119525584",
            "urlToImage": null,
            "publishedAt": "2025-03-07T02:35:30Z",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Maryclaire Dale",
            "title": "Medical plane’s voice recorder likely wasn’t working for years before Philadelphia crash - The Associated Press",
            "description": "The National Transportation Safety Board says a cockpit voice recorder was not working on a medical transport plane that crashed in Philadelphia in January and likely had not been working for several years. In a preliminary report issued Thursday, the NTSB al…",
            "url": "https://apnews.com/article/philadelphia-plane-crash-3fc95249e1c008d9bfe801ad7826ad73",
            "urlToImage": "https://dims.apnews.com/dims4/default/7be3799/2147483647/strip/true/crop/5815x3271+0+303/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc0%2Fb6%2Ff860f5ccb6b883ab54a08a026e23%2F98b50d97f20a40d48d564f305a775b37",
            "publishedAt": "2025-03-07T01:40:00Z",
            "content": "PHILADELPHIA (AP) The cockpit voice recorder was not working on a medical transport plane that killed seven people when it plummeted into a Philadelphia neighborhood in January and likely had not bee… [+4710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Erik Pedersen",
            "title": "Walt Disney Animation Studios Staffers Ratify First Union Contract – Update - Deadline",
            "description": "Production workers at Walt Disney Animation Studios have voted overwhelmingly to unionize with IATSE and Animation Guild. The vote was 93% \"yes\" on 96% turnout.",
            "url": "http://deadline.com/2025/03/disney-animation-studios-unionize-iatse-animation-guild-1235590384/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/11/Walt-Disney-Studios-Animation-The-Animation-Guild.jpg?w=1000",
            "publishedAt": "2025-03-07T01:30:00Z",
            "content": "UPDATED, 5:30 PM: Some 17 months after unionizing, production management staffers at Walt Disney Animation Studios have ratified their first labor contract. The vote conducted by IATSE‘s Animation Gu… [+1948 chars]"
        }
  ]
  constructor(){
    super();
    // console.log("Hello I am A Constructor From news Component");
    this.state={
      articles: this.articles
    }
  }

  render() {
    return (
    <>
        <h2 style={{textAlign: "center"}}>Uppal News - Top Headlines</h2>
        
        <div className='container my-3'>
        <div className="row">
            < NewsItems />
        </div>
        </div>
    </>
    )
  }
}

export default News