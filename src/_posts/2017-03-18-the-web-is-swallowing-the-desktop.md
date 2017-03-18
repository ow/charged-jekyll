---
layout: post
title: 'The web is swallowing the desktop whole and nobody noticed'
featured: "/assets/images/electron.jpg"
featured: "/assets/images/electron.jpg"
categories: web
date: 2017-03-18
type: post
comments: true
description: "Without anyone actually noticing, Electron-based web apps have begun swallowing your desktop computer whole."
---
While we weren't watching, over the last two years the web has quickly begun swallowing the desktop environment whole. If you're an average user, you probably have a few desktop apps that you use daily without even realizing they're built using web technology.

The idea of major applications on your desktop, that you use every day, being entirely web-based was pretty far-fetched a few years ago — many people were skeptical that the web could ever supercede desktop apps in both performance, or usability.

Now, in 2017, many web-based desktop apps are fantastic — and we're using them daily, often without even knowing. Last week, I realized that most of the applications I use every day are web-based, with the exception of a handful of heavier tools like Photoshop and Audition.

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Realized the majority of the apps I use every day are Electron. The web is swallowing the desktop. <a href="https://t.co/t27L5U9roo">pic.twitter.com/t27L5U9roo</a></p>&mdash; Owen ⚡️ (@ow) <a href="https://twitter.com/ow/status/842095992753295361">March 15, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[Electron](https://electron.atom.io/), [which was built originally as a way for GitHub to release its Atom code editor across platforms](https://electron.atom.io/blog/2015/04/23/electron), only hit the world in 2015 for the first time, but it's already quickly changing the types of apps we use daily.  

Every type of app you use can eventually become an Electron app, and it's happening fast: I've converted to Nylas for email, Slack for chat, Hyper for my terminal, Visual Studio Code for development and a whole lot more. Even outside of Electron, the web is creeping in everywhere: Spotify's desktop app is built with JavaScript too. 

The reason for this rapid change is simply that an Electron app is easier to maintain and develop, allows you to target multiple platforms *and* lets your team use modern build pipelines to write once and truly run everywhere. As a result, they tend to be more actively maintained, and see more updates than the competition. 

<h3 class="pull"><a href="https://twitter.com/SteveStreza/status/842268992756563968">“Look i want native apps to not suck but apple doesn't give a shit, ms barely gives a shit, and app devs absolutely do not give a shit”</a></h3>

A lot of people highlight that Electron apps tend to use more memory than others, but that claim tends to be overblown, or just simply out-dated. Nylas' desktop email app uses just 80MB of Memory, while Slack only uses 166MB — developers might loudly complain that's too much, but given modern machines tend to have more than 8GB of RAM onboard, what does it matter?

[Companies like Slack are addressing that head-on](https://slack.engineering/reducing-slacks-memory-footprint-4480fec7e8eb#.3wedumcyc). A post this month said that the company is already addressing memory concerns (most of which happen to outlying users that are signed into many teams) and that it's entirely resolvable — it just takes smart decisions.

Another popular complaint is that Electron-based apps don't look and feel as good as their native counterparts. That might be true for some, but Nylas Mail looks just as good as Apple's own default mail client, and Slack blends just like everything else.

![](/assets/images/nylas.png)

 The thing is, most users can't even tell they're using a "web app" anymore. In Electron's early days, it's true that they tended to be slower, or stick out like a sore thumb, but now I generally prefer them for how well they feel like a real native app.
 
 Why should a user even give a shit what's underneath, as long as they can get their work done? And best of all, updates keep getting delivered, and they basically have no idea. 

 There are [*a lot* of Electron haters](http://sircmpwn.github.io/2016/11/24/Electron-considered-harmful.html) out there, and any time you bring it up on Twitter you're sure to be eaten alive, but the justifications for not using Electron are dated and just plain wrong: the reality is that people are writing useful software with Electron and **actually ship shit.**

 <h3 class="pull"><a href="https://twitter.com/_tobycox/status/842152371274702848">“Cue loads of native devs saying "web apps suck" and millions of real users happily not giving a fuck what they're written in.”</a></h3>

 Best of all, many of these Electron-based apps have actually built a business model! Nylas, which is 100% Electron, is growing an entire platform despite only having an Electron app, which might have been a sin in the past — and people are paying for it!

 Nylas' founder, Michael Grinich [says](https://twitter.com/grinich/status/842243239398723584) the company took a huge, risky bet on choosing Electron a few years ago — I'm sure people thought they were crazy — but that it's paying off.
 
 The biggest benefit of Electron, for me, has been proven through my switch to Windows. The majority of the apps I use and love every day exist on both platforms thanks to the technology, and operate exactly the same all while blending in with the operating system. 

<blockquote class="twitter-tweet  tw-align-center" data-lang="en"><p lang="en" dir="ltr">Apps are winning! No wait! The browser is winning! 🤔 <a href="https://t.co/lpazY5EBXG">pic.twitter.com/lpazY5EBXG</a></p>&mdash; Koen Bok (@koenbok) <a href="https://twitter.com/koenbok/status/816244815109230592">January 3, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

The best part about this transition is end-users basically haven't noticed. Millions of people are happily using Slack every day, and it helps them get their job done. 

An example of how a business model can be disrupted by Electron is already underway. Sketch's design tool that hundreds of thousands of designers use famously only works on a Mac — [there are hundreds of people looking for alternatives on Google](https://www.google.nl/search?q=sketch+windows&oq=sketch+windows&aqs=chrome..69i57j0l5.1448j0j4&sourceid=chrome&ie=UTF-8), and as far as anyone can tell, it's an [intentional ommission](http://bohemiancoding.com/sketch/support/faq/02-general/5-windows.html):

> "Sketch relies on a lot of technology that is exclusive to OS X and the fact that no other OS provide a clear business model for software development, we’re not considering supporting it."

Great, but there are thousands of Windows designers out there too... so what do they use? Is there not a paid market for them to use too? 

 Well, as it turns out, [Figma](figma.com), a new entrant in the market that offers a web-based offering *also* has an Electron app, and it can directly import Sketch files too. 

In my mind, it's only a matter of time before the tool that works everywhere eventually beats out the tool that's restricted to slow releases on a single platform — oh, and [Figma literally ships a platform update every other week.](http://releases.figma.com/)

It's still early days, but Electron is eating the desktop alive. There's no way to stop it, and developers planning a native app should seriously ask themselves: should I learn to write HTML instead, and use Electron so I can target users on any platform? 

It's clear that the answer is yes, and that the true native app is a dying breed.