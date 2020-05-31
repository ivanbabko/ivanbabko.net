---
layout:         article-design
categories:     ["design"]
classes:        ["c-page--article"]

type:           "Case study"
title:          "Booking.com for Business"
description:    "A story about designing Booking.com’s business product"
tags:           ["2015&ndash;2016", "New product design", "Business Bookers"]
color:          "#90CAF9"
thumbnail:      "/assets/img/thumb_bb.png"
feature:        "/assets/img/feature_bb.png"

intro:
  date:         "2015"
  involvement:  ["UX Designer", "Team Lead"]
  team:         "Business Bookers Tool"
  project: "Despite having a fair share of business travellers using the service, Booking.com circa 2014 lacked features that would improve their experience. It was evident however that business travellers represented a valuable customer segment and that there was a lot of potential in solving their unique problems. To tackle this issue, a new team was formed and tasked to build Booking.com for Business  &mdash; a business product based on Booking.com’s platform. "
  role: "I combined two roles — a UX designer and a Team lead. As a UX designer I executed the end-to-end product design process. As a Team lead I facilitated the agile development process and managed the international team."
---



<figure class="c-figure">
  {% include image.html url="/assets/img/bb_photo.jpg" type="photo" %}
  <figcaption class="c-figure__caption">Lots of work ahead</figcaption>
</figure>




## User research & personas

When we got together as a team, it immediately felt like we were in a startup. Suddenly, the entire wealth of Booking.com’s data at our disposal wasn’t enough to start building the product for business users. We knew very little about their needs. To kick-off the design work, first it was important to get acquainted with them.

We went out and did user interviews in several countries. We met with two types of users: people who go on business trips and people who organise business trips for them. We learned that both of these groups had unique set of needs. We synthesized these needs into user personas that shaped the design of the product as we went on.

<figure class="c-figure">
  {% include image.html url="/assets/img/bb_personas.jpg" %}
  <figcaption class="c-figure__caption">User personas</figcaption>
</figure>





## Wireframes

Armed with knowledge about potential users, we started brainstorming. Our aim was to envision an ideal product that would help our personas accomplish their goals. We came up with a list of high-level requirements that were visualised using wireframes. This visual representation of our early ideas enabled fruitful conversations with stakeholders. The wireframes were high-level enough that we could temporarily set aside technical constraints and visual design, but detailed enough to convey the purpose of each screen.

<figure class="c-figure">
  <div class="o-grid  o-grid--s">
    <div class="o-grid__item  c-figure__item  u-1/2@s">
      {% include image.html url="/assets/img/bb_wireframe_01.png" %}
    </div>
    <div class="o-grid__item  c-figure__item   u-1/2@s">
      {% include image.html url="/assets/img/bb_wireframe_02.png" %}
    </div>
    <div class="o-grid__item  c-figure__item  u-1/2@s">
      {% include image.html url="/assets/img/bb_wireframe_03.png" %}
    </div>
    <div class="o-grid__item  c-figure__item  u-1/2@s">
      {% include image.html url="/assets/img/bb_wireframe_04.png" %}
    </div>
  </div>
  <figcaption class="c-figure__caption">Basic wiframes</figcaption>
</figure>





## Minimal Viable Product (MVP) 

The product vision was exciting, but it was just a hypothesis. It was important to get the product out there as soon as possible, and to start learning from real world usage. What really helped is that we already had a great product — Booking.com itself. This meant we could build on its strengths and reuse what was already available. With this in mind, we defined the minimal viable product (MVP) and started mapping out its user journey. We kept this user journey in front of us at all times. It was a living organism that evolved as we went on.

<figure class="c-figure">
  <div class="o-grid  o-grid--s">
    <div class="o-grid__item  c-figure__item  u-1/2@s">
      {% include image.html url="/assets/img/bb_user_journey_01.jpg" ratio="16:10" type="photo" %}
    </div>
    <div class="o-grid__item  c-figure__item   u-1/2@s">
      {% include image.html url="/assets/img/bb_user_journey_02.jpg" ratio="16:10" type="photo" %}
    </div>
  </div>
  <figcaption class="c-figure__caption">Evolution of the user journey board</figcaption>
</figure>






## Detailed design

Filling the user journey with detailed designs felt like finishing a puzzle. It was very rewarding. As we progressed, we could see how complete the whole picture was from design perspective.

<figure class="c-figure">
  {% include image.html url="/assets/img/bb_mockups.png" ratio="16:10" type="photo" %}
  <figcaption class="c-figure__caption">The very first iteration of design mockups</figcaption>
</figure>




## Prototype

Pretty soon we found a problem with static mockups. They didn’t give us a true feeling of the user experience. It wasn’t always clear how the application would respond to user actions, and how one page would transition into another. We also needed user feedback on design decisions we had made so far, but the product was not ready yet to be used in usability sessions.

As a response to these issues, we created an interactive prototype that simulated the end-to-end user flow. It was possible to land on the product page, go through the sign-up process, and experience key application features. In this way, we killed two birds with one stone: we had created a tool that would better guide product development <i>and</i> procure user feedback.


<figure class="c-figure">
  {% include player.html poster="/assets/img/bb_prototype.jpg" url="/assets/video/bb_prototype" %}
  <figcaption class="c-figure__caption">Interactive prototype</figcaption>
</figure>


Some design solutions that previously looked good as static mockups didn’t work so well when presented in the dynamic prototype. Acknowledging this helped us to fix design issues before they reached the product. Participants in user testing sessions were also more engaged with the prototype because it felt like a real product.

However prototypes have their limitations. It’s hard to do full-scale usability tests with them. They may look real, but not every possible scenario is supported, so facilitators need to carefully steer participants. Maintaining ever evolving prototypes also becomes tedious over time. Since the prototype was built with HTML and CSS, we made the maintenance easier by separating reusable code into include files. We accomplished this by using Jekyll, a static website generator.

<figure class="c-figure">
  {% include image.html url="/assets/img/bb_jekyll.jpg" %}
  <figcaption class="c-figure__caption">Prototype code</figcaption>
</figure>

The good news is that we didn’t have to rely solely on the prototype for long. The product quickly took shape and it became possible to put the real thing in front of users. We partnered with several companies who became our early adopters. This allowed us to start gathering user data before the official product launch. We also continued usability testing, because the data told us what was happening, but often left us wondering why.





## User feedback

Even with the working product at our disposal, we continued using prototypes to fill the gaps during usability tests. This helped us to establish whether mocked-up ideas were worth implementing, and to test parts of the application that were still in development. We seamlessly integrated prototypes into the live product and switched them on specifically for usability session participants.

<figure class="c-figure">
  <div class="o-grid  o-grid--s">
    <div class="o-grid__item  c-figure__item  u-1/2@s">
      {% include image.html url="/assets/img/bb_usability_01.jpg" ratio="4:3" type="photo" %}
    </div>
    <div class="o-grid__item  c-figure__item   u-1/2@s">
      {% include image.html url="/assets/img/bb_usability_03.jpg" ratio="4:3" type="photo" %}
    </div>
  </div>
  <figcaption class="c-figure__caption">User testing in London, UK.</figcaption>
</figure>

Usability labs were not our only test environment. We visited company offices and observed how the product was performing in the real world. These office visits were highly valuable, providing us with insight from observation of users in their natural environment. We saw what tools they used, what workarounds they developed, and how our product would fit their work process. Some things that performed well in the  lab setup, failed during office visits. Possibly this was due to the fact that labs were an artificial environment. Participants were not fully themselves there compared to the familiar setup of their working space.

<figure class="c-figure  c-figure--inline">
  {% include image.html url="/assets/img/bb_office_visit_01.jpg" ratio="4:3" type="photo" %}
  <figcaption class="c-figure__caption">Travel manager in their office going through the registration process.</figcaption>
</figure>







## Product page

During the office visits we saw that our  users were working in a very busy environment and were constantly distracted. The time they spent making a decision was very short. Plus, they were sceptical about introducing new tools into their work. All this posed a particular challenge for the product page. Our users needed proof that the product would do as it promised, and that it was reliable. They wanted to explore the product before making any commitments. These learnings inspired new product page designs that needed to be validated.

<figure class="c-figure">
  {% include image.html url="/assets/img/bb_pp_wire.png" %}
  <figcaption class="c-figure__caption">Product page wireframe</figcaption>
</figure>

We opted for remote surveys as a method to test new designs quickly and on a large scale. This enabled us to cover several markets and to bring quantitative insights into the optimisation efforts while we were still operating in the stealth mode. 

<figure class="c-figure  c-figure--inline">
  {% include image.html url="/assets/img/bb_survey.png" ratio="3:2" type="photo" zoom="false" %}
  <figcaption class="c-figure__caption">Heat map of user reactions on the product page.</figcaption>
</figure>

It took us a few survey iterations to arrive at a version that proved to work well for our users. Had we gone with one of the new designs without testing, we would have ended-up with a sub-optimal page upon product launch. Now that we had the fully-tested user journey in place, we could reveal the product to the world.

<figure class="c-figure">
  {% include image.html url="/assets/img/bb_product_page.png" ratio="16:9" %}
  <figcaption class="c-figure__caption">Product page at the time of launch.</figcaption>
</figure>




## Final thoughts

Fast forward to today. Booking.com for Business is up and running worldwide. Looking back at the process that brought us here, this is what comes to mind:

- In a startup-like environment of complete uncertainty, we had to think creatively and pragmatically at the same time. And not just about the product itself, but also about how to get there. Booking.com as a company was really experienced in small step innovation, but there was a lot to learn about new product development. 

- We were focused on the user from day one and all the way through. It was crucial to have constant feedback loop to avoid getting stuck in analysis paralysis. Even when we didn’t yet have the complete product, we used prototypes to learn from potential users. 

- By combining quantitative and qualitative user research methods, we got the best of both worlds. They complemented each other and helped us make informed decisions. 
