import { defineStore } from 'pinia';

const articles: Article[] = [
  {
    "id": 1286,
    "title": "Banning Cellphones in Schools Gains Popularity Across the United States",
    "summary": "A growing movement in the U.S. sees both red and blue states agreeing on banning cellphones in schools. With concerns about mental health and classroom distractions, states like Arkansas and California are leading the way.",
    "created_at": "2025-01-16T00:00:14.128-08:00",
    "updated_at": "2025-01-16T00:00:14.128-08:00",
    "content": "The movement to limit or ban cellphone use in schools is gaining traction in both traditionally conservative and liberal states. Leaders such as Governor Sarah Huckabee Sanders of Arkansas and Governor Gavin Newsom of California, despite differing politically, have found common ground on this issue.\n\nRecent legislation across various states reflects this shift. Over the past two years, eight states have enacted policies restricting student cellphone use during school hours, with more states considering similar measures. These restrictions aim to address mental health concerns from excessive screen time and respond to complaints from teachers about cellphones distracting students from their studies.\n\nProminent figures, such as Surgeon General Dr. Vivek Murthy, have advocated for warning labels on social media to highlight its potential impact on young people. They also support the idea of providing phone-free times at schools.\n\nAccording to the National Center for Education Statistics, a significant proportion of U.S. schools claim to have cellphone bans for non-academic use. However, enforcement of these policies varies widely, and actual compliance by students differs.\n\nThe initiatives vary from state to state. For instance, Florida has implemented a comprehensive ban, while California requires each school district to develop its own policy by 2026. Although some states have not legislated outright bans, they encourage districts to implement their own regulations and sometimes provide funding to help manage cellphone storage during school hours.\n\nGovernors from states like New Hampshire, Iowa, and Nebraska have recently voiced their support for such bans, emphasizing the need to minimize distractions and ensure students' safety.\n\nOpposition to these bans primarily comes from parents who are concerned about staying in contact with their children during emergencies. However, supporters argue that during crises, cellphones can be more of a liability by causing additional distractions or revealing students' locations.\n\nDespite differing opinions, there is a shared understanding that the negative effects of unmanaged cellphone use, including social media-related issues like cyberbullying, need addressing, albeit the methods remain debated.\n\nThis report includes contributions from several Associated Press writers.",
    "sources": "Associated Press, Daily Mail Online"
  },
  {
    "id": 1287,
    "title": "Banning Cellphones in Schools Gains Bipartisan Popularity in the US",
    "summary": "The movement to ban student cellphone use during school hours is attracting support across political divides, with certain states implementing various measures to restrict phone access.",
    "created_at": "2025-01-16T00:00:18.796-08:00",
    "updated_at": "2025-01-16T00:00:18.796-08:00",
    "content": "In recent years, the initiative to ban cellphones in schools during the academic day has gained considerable traction, receiving support from politicians across the ideological spectrum. This bipartisan push is primarily concerned with mitigating the negative impacts of excessive screen time on students' mental health and addressing the issue of cellphones being a distraction in classrooms.\n\nNotably, Arkansas' Republican Governor Sarah Huckabee Sanders and California's Democratic Governor Gavin Newsom are prominent proponents of these restrictions. Despite their differing political views, both governors have expressed support for preventing cellphone usage in schools.\n\nOver the past two years, at least eight states, including California, Florida, Indiana, Louisiana, Minnesota, Ohio, South Carolina, and Virginia, have enacted legislation to limit student cellphone use in schools. The specifics of these laws vary, with some states requiring a total ban during class time, while others call for individual school districts to establish their own policies by a certain date.\n\nThe motivation behind these bans is rooted in several factors. Parents and educators are increasingly concerned about the mental health challenges posed by continuous phone and social media usage. The U.S. Surgeon General has also emphasized the importance of phone-free school periods to combat these issues.\n\nHowever, the proposed restrictions are not without detractors. Some parents argue that students should have access to phones for safety reasons, especially in cases of emergencies like school shootings. Additionally, opponents suggest that banning phones doesn't tackle underlying social issues, such as bullying, which often continue outside school hours.\n\nDespite these criticisms, other states are considering or implementing similar policies, reflecting a growing trend. Some policymakers are exploring alternative approaches, such as encouraging schools to adopt phone-free policies or providing funds for schools to manage phone use.\n\nThis ongoing debate highlights the complex balance between ensuring student well-being and addressing safety concerns while navigating the ever-evolving digital landscape.",
    "sources": "This article was informed by a report from the Associated Press, as published on Daily Mail Online."
  },
  {
    "id": 1290,
    "title": "Cellphone Bans in Schools: A Growing Trend Across the US",
    "summary": "The movement to ban cellphones in schools is gaining traction across the United States. Driven by concerns from both teachers and parents regarding distractions and mental health impacts, several states have begun enacting measures to limit or eliminate phone use during school hours.",
    "created_at": "2025-01-16T00:00:28.141-08:00",
    "updated_at": "2025-01-16T00:00:28.141-08:00",
    "content": "In recent years, the idea of banning cellphones during the school day has been gaining bipartisan support across the United States. Supported by leaders from both Republican and Democratic ideologies, the move is a response to increasing concerns about the effects of screen time on children’s mental health and the disruptive nature of phones in the educational environment.\n\nGovernors like Sarah Huckabee Sanders of Arkansas and Gavin Newsom of California have been outspoken advocates of this policy, highlighting its appeal across political lines. This growing sentiment is reflected in at least eight states that have enacted cellphone use restrictions in schools recently.\n\nStates such as Florida and California have implemented different approaches to handling cellphone usage. Florida, for instance, was among the first to mandate a complete ban on classroom cellphone use in public schools. Meanwhile, California enacted a law requiring its school districts to establish phone policies by 2026.\n\nThe national conversation around this issue also includes voices like Surgeon General Dr. Vivek Murthy, who supports efforts to create phone-free times in schools due to the potential negatives of social media and telephone use on students' well-being.\n\nThough widely supported, these bans have faced some opposition. A common argument against such restrictions is the need for students to have immediate contact with parents in emergencies. Additionally, critics argue that these bans do not address deeper issues like online bullying or the overall impact of social media.\n\nDespite the concerns, proponents believe that phone-free policies can help reduce distractions and improve focus in classrooms. Advocates suggest these measures are necessary to give students a break from digital pressures during school hours.",
    "sources": "Information is based on a report from Yahoo News, with additional insights from Associated Press contributors."
  },
];

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    selectedArticle: null,
    articles: articles,
  }),
  actions: {
    clearSelectedArticle() {
      this.selectedArticle = null;
    },
    setSelectedArticle(id) {
      article = articles.find((article) => article.id === id)
        this.selectedArticle;
    },
  },
});
