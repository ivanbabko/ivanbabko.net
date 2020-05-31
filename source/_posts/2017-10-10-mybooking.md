---
layout:         article-design
categories:     ["design"]
classes:        ["c-page--article"]

type:           "Case study"
title:          "MyBooking Page"
description:    "A story about redesigning the post-booking experience on Booking.com"
tags:           ["2013", "Redesign", "Post-Booking"]
color:          "#81D4FA"
thumbnail:      "/assets/img/thumb_pb.png"
feature:        "/assets/img/feature_pb.png"

intro:
  date:         "2013"
  involvement:  ["UX Designer"]
  team:         "Post-Booking"
  project: "MyBooking is a self-service area on Booking.com where users manage their reservations. For example, they can change stay dates, make special requests, cancel reservations, and so on. Historically, improving this area was not a priority because everyone was focused on the conversion funnel pages like search results, property page, and booking process. However rapid growth of reservations and resulting increase in customer service workload made it crucial to improve the post-booking area."
  role: "This was my first project after I joined Booking.com as UX designer in 2013. My ultimate goal was to improve the self-service user experience. To achieve it, I delivered the new design, implemented it on the website, and run A/B tests to see if the new design outperforms the old one."
---


<figure class="c-figure">
  {% include image.html url="/assets/img/pb_history.png" ratio="4:3" %}
  <figcaption class="c-figure__caption">MyBooking at the start of the project in 2013. The self-service features were grouped in the lightbox.</figcaption>
</figure>


## Research

I started out by familiarizing myself with current state of affairs. I spent some time playing with the existing interface and noting my ideas.
Then I met with several stakeholders to capture their ideas and to make sure I understand the underlying business goals. I also spent some time analysing usage data for MyBooking features. This helped to prioritise them better in my designs later on. Finally, I visited Booking.com’s customer service to talk to the agents and shadow their calls. There I learned about some of the customers’ troubles with the existing UI and how this affected the customer service work.



## Synthesis 

My team and I grabbed a room to narrow down and prioritise the research findings. Although the research sparkled many ideas for new features (that were diligently added to the backlog), we deliberately focused on ideas about better presentation of the current feature set. This way we made sure the development work is not extra large and that the future A/B experiment compared apples to apples, i.e. different designs of the same functionality.

Here are some of the ideas we came up with.

<figure class="c-figure">
  {% include image.html url="/assets/img/pb_cards.png" %}
  <figcaption class="c-figure__caption">Couple of examples from the brainstorm</figcaption>
</figure>



## Sketching

I started the redesign process by sketching different ideas on how to present the information in more transparent and engaging way.  

<figure class="c-figure">
  {% include image.html url="/assets/img/pb_sketch.jpg" type="photo" ratio="3:2" %}
  <figcaption class="c-figure__caption">One of the nicer looking sketches</figcaption>
</figure>


## Wireframes

Once I found the direction that felt right, I went into Balsamiq and "digitalized" the sketches. This enabled the team and I to iterare more rapidly.

<figure class="c-figure">
  {% include image.html url="/assets/img/pb_balsamiq.png" ratio="1:1" %}
  <figcaption class="c-figure__caption">One of the Balsamiq wireframes</figcaption>
</figure>


## Design

After a few feedback rounds we arrived at a concept that we all felt good about. To produce final mockups I switched to my old friend Photoshop (it's 2013, remember?). I used bold photography to make the design more engaging and the upcoming trip feel more exciting. I created more prominent feature hierarchy that was better aligned with user needs which were identified during the research phase. I also believed this hierarchy to be more beneficial for the business because I applied my understanding of internal customer service processes.

<figure class="c-figure">
  <style>.pb_mockup:before {padding-bottom: 110%;}</style>
  {% include image.html url="/assets/img/pb_mockup.jpg" ratio="1:1" class="pb_mockup" %}
  <figcaption class="c-figure__caption">Polished MyBooking mockup</figcaption>
</figure>

At this stage, the biggest trade off I made was in the area of interaction design. Clickable elements launched the already familiar lightbox I talked about earlier. It was restyled and stripped down to contain only elements requested by the user. Although not ideal, this approach allowed to launch the A/B test sooner and start gathering data while I was working on the improved interaction design as a follow-up.


## Challenges

As it often happens, the polished Photoshop mockup looked perfect until I started implementing it in the code. While the mockup was receiving <a href="https://dribbble.com/shots/1786481-My-Booking" class="c-link" target="_blank">likes on Dribbble<svg class="o-icon  c-icon--external"><use xlink:href="#external"></use></svg></a>, the reality was giving it a hard time. Here are some of the challenges I faced.

- The content of MyBooking page is highly dynamic and varies significantly from reservation to reservation. Layout had to be really bulletproof to accommodate for unpredictable copy lengths and price amounts.

- Booking.com is a global service that supports 40+ languages and 50+ currencies. This includes languages written right-to-left and currencies with high exchange rates. I needed to make sure that my design looked and worked great for users from all over the world. 

- Many hotels have only low resolution photos available. I had to create alternative header design to be used in this case.



## A/B test

After covering all imaginable use cases in the code and testing the hell out of them, I launched the A/B experiment. It showed that some self-service features were used more, but the customer service metrics were not affected. In other words, I could conclude that the user experience improved, but I couldn’t confirm that this was beneficial for the business.




## Usability test

To get more data, I collaborated with the user research team. Usability test confirmed that users fluently completed their tasks and that they were satisfied with their experience. The problem was to get them to that point. Users either didn’t know that online changes were possible or they were simply afraid to give them a try. Most of the participants were going to contact the customer service.

<figure class="c-figure">
  {% include image.html url="/assets/img/pb_usability.jpg" type="photo" ratio="4:3" %}
  <figcaption class="c-figure__caption">Observing usability test on a projected screen</figcaption>
</figure>

The answer to the mystery of the A/B experiment was in front of me. To have an impact on customer service metrics, the self-service features needed to be not only better designed, but better promoted, too. This finding has opened a path for new experiments. Their purpose was to help users discover the MyBooking service. And that’s what my team and I focused on as a follow-up to the redesign.

<figure class="c-figure">
  {% include image.html url="/assets/img/pb_promo.png" %}
  <figcaption class="c-figure__caption">One of the follow-up experiments to increase user awareness about self-service product.<br>We added 'Manage Your Booking' button to the site header.</figcaption>
</figure>

## Outcome
MyBooking redesign improved the user experience and — after more effort put into promoting the service — it improved the business metrics, too. The redesign set the new base for future experiments that took this success further.


Starting out in the company with this project was very challenging and very rewarding at the same time. The process I went through with my team quickly got me up to speed and showed what it means to design on a global scale for millions of users.
