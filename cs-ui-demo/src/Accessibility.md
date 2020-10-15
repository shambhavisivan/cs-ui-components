# Accessibility

### General<a name="General"></a>
* Slogan - Essential for some, useful for all.
* Accessibility addresses discriminatory aspects related to an equivalent user experience for people with disabilities, including people with age-related impairments. For the web, accessibility means that people with disabilities can perceive, understand, navigate, and interact with websites and tools, and that they can contribute equally without barriers.

* The UN Convention on the Rights of Persons with Disabilities recognizes access to information and communications technologies, including the Web, as a basic human right. As such, it is our duty to help provide that access.

* There is also a strong business case for accessibility. Accessibility overlaps with other best practices such as mobile web design, device independence, multimodal interaction, usability, design for older users, and search engine optimization.

The three conformance levels are:
* A (lowest)
* AA (mid-range)
* AAA (highest)


* Salesforce and Cloudsense are aiming to meet conformance level of AA

There are:
* 30 Level A Success Criterions
* 20 Level AA Success Criterions
* 28 Level AAA Success Criterions

### Offical Documentation<a name="Offical Documentation">
* Web Content Accessibility Guidelines (WCAG) 2.1

* SUPPORTIVE DOCUMENTS
* How to Meet WCAG 2.1 (Quick Reference)
* Understanding WCAG 2.1
* Techniques for WCAG 2.1
* WAI-ARIA Authoring Practices 1.1

* ADDITIONAL
* [Inclusive Components by Heydon Pickering][https://drive.google.com/drive/folders/1W9DmASckOI10LXzw2LO0nWGhD2iSxX7j] . CloudSense has license.

### Criterions<a name="Criterions"></a>
List of all criterions

#Perceivable
> Text alternatives
* 1.1.1: Non-text content [A]
Time-based media
* 1.2.1: Audio-only and video-only (Prerecorded) [A]
* 1.2.2: Captions (Prerecorded) [A]
* 1.2.3: Audio Description or Media Alternative [A]
* 1.2.4: Captions (Live) [AA]
* 1.2.5: Audio Description [AA]
Adaptable
* 1.3.4: Orientation [AA](2.1)
* 1.3.5: Identify Input Purpose [AA](2.1)
* 1.3.1: Info and Relationships [A]
* 1.3.2: Meaningful Sequence [A]
* 1.3.3: Sensory Characteristics [A]
Distinguishable
* 1.4.10: Reflow [AA](2.1)
* 1.4.11: Non-text Contrast [AA](2.1)
* 1.4.12: Text Spacing [AA](2.1)
* 1.4.13: Content on Hover or Focus [AA](2.1)
* 1.4.1: Use of Color [A]
* 1.4.2: Audio Control [A]
* 1.4.3: Contrast (Minimum) [AA]
* 1.4.4: Resize text [AA]
* 1.4.5: Images of Text [AA]
#Operable
Keyboard accessible
* 2.1.4: Character Key Shortcuts [A](2.1)
* 2.1.1: Keyboard [A]
* 2.1.2: No Keyboard Trap [A]
Enough time
* 2.2.1: Timing Adjustable [A]
* 2.2.2: Pause, Stop, Hide [A]
Seizures
* 2.3.1: Three Flashes or Below Threshold [A]
Navigable
* 2.4.1: Bypass Blocks [A]
* 2.4.2: Page Titled [A]
* 2.4.3: Focus Order [A]
* 2.4.4: Link Purpose (In Context) [A]
* 2.4.5: Multiple Ways [AA]
* 2.4.6: Headings and Labels [AA]
* 2.4.7: Focus Visible [AA]
Pointer Accessible
* 2.5.1: Pointer Gestures [A](2.1)
* 2.5.2: Pointer Cancellation [A](2.1)
* 2.5.3: Label in Name [A](2.1)
* 2.5.4: Motion Actuation [A](2.1)
Additional sensory inputs
#Understandable
Readable
* 3.1.1: Language of Page [A]
* 3.1.2: Language of Parts [AA]
Predictable
* 3.2.1: On Focus [A]
* 3.2.2: On Input [A]
* 3.2.3: Consistent Navigation [AA]
* 3.2.4: Consistent Identification [AA]
Input assistance
* 3.3.1: Error Identification [A]
* 3.3.2: Labels or Instructions [A]
* 3.3.3: Error Suggestion [AA]
* 3.3.4: Error Prevention (Legal, Financial, Data) [AA]
#Robust
Compatible
* 4.1.3: Status Messages [AA](2.1)
* 4.1.1: Parsing [A]
* 4.1.2: Name, Role, Value [A]



### Frequently Asked Questions<a name="FAQ"></a>
* Which Cloudsense products are currently considered accessible? - Sales Console, Solution Console, CS UI Components

* What assistive technologies are used for web browsing? - Screen reader software

* Which are the main screen reader apps? - JAWS, NVDA, VoiceOver, Windows Narrator, ChromeVox

* What are distinctions between terms accessibility, usability, inclusion?

> Accessibility addresses discriminatory aspects related to an equivalent user experience for people with disabilities, including people with age-related impairments. For the web, accessibility means that people with disabilities can perceive, understand, navigate, and interact with websites and tools, and that they can contribute equally without barriers.

> Usability and user experience design is about designing products to be effective, efficient, and satisfying. Specifically, ISO defines usability as the “extent to which a product can be used by specified users to achieve specified goals effectively, efficiently and with satisfaction in a specified context of use" (in ISO 9241-11).

> Inclusive design, universal design, and design for all involves designing products, such as websites, to be usable by everyone to the greatest extent possible, without the need for adaptation. Inclusion addresses a broad range of issues including access to and quality of: hardware, software, and Internet connectivity; computer literacy and skills, economic situation, education;, geographic location, and language; as well as age and disability.

### App general<a name="App General"></a>
-	Never have more than one h1
-	Never skip any header levels (e.g. h1, h3, h4...)
-	Provide unique page title
-	Text resizing via relative units (em or rem)
-	Define language via attribute
-	Add hidden skip links to jump over repetitive content such as navigation tabs, interactive tables etc., e.g. jump to main content, jump to footer
-   Never use tabindex value different than -1 or 0.