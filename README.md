# Lushomo — ICT251 Personal Portfolio

Plain HTML5, CSS3 and JavaScript website covering the technical structure of Activities 2 and 3. No framework, build, server or database is needed.

## Before submission
- Review the drafted personal content and put it in your own words.
- Replace images/photo1.jpg, photo2.jpg and photo3.jpg with three photos you took or have permission to share. Update alt text, captions and credits.
- Replace videos/intro.mp4 with YOUR 30–60 second self-introduction (name, programme and a web skill you want to learn).
- Replace videos/voice.mp3 with YOUR 15–30 second hobby or web-learning recording. Update the written media descriptions and transcripts; remove demo notices.
- The bundled video is a silent demonstration title sequence and the audio is a demo tone. They demonstrate working controls but DO NOT satisfy the personal-recording requirement.
- Create a GitHub repository, then change the footer source-link href in index.html from the profile URL to your actual repository URL. The current link is only the known GitHub profile.
- No previous Activity 1 or 2 files were supplied. No original backup is fabricated. If you later locate them, keep your actual Activity 1 backup and an Activity 2 backup outside the published folder as the briefs require.

## Run locally
Extract the ZIP and open myweb/index.html, or open myweb in VS Code and use Live Server. All assets use relative paths and work offline. JavaScript is loaded with defer.

## Four JavaScript features
1. Theme switch: select Light theme / Dark theme repeatedly. The preference is saved when localStorage is available.
2. Search: search at least three projects by title or skill. Try HTML, CSS, JavaScript, an unknown term and spaces. Reset shows all projects.
3. Expandable project details: Show details opens an explanation; Hide details closes it. aria-expanded records the state.
4. Contact validation and preview: submit empty inputs, spaces-only name/message, malformed email, then valid data. Errors appear beside fields. Valid data appears in a local summary without reloading or sending. User data is displayed using textContent. Required attributes remain for browsers with JavaScript disabled.

## Render deployment
1. Upload the CONTENTS of myweb to a public GitHub repository. index.html should be at the repository root.
2. On Render choose New > Static Site, connect that repository and select main.
3. Root Directory: blank. Build Command: echo "No build required". Publish Directory: . . Enable Auto Deploy for main.
4. Wait for Live, open the public onrender.com HTTPS URL and repeat all checks.
5. Make a small improvement, commit it to main, wait for automatic redeployment and verify the change at the same URL.
6. Submit the live Render URL for Activity 3; Activity 2 asks for the GitHub repository URL.
This package has not been uploaded to GitHub or deployed on Render.

## Testing checklist
At 375px and 1280px widths: no sideways scrolling; readable text and controls. Check every section anchor, the external MDN link, the footer repository link after editing it, all photos and both media players. Tab through all links and controls; focus must remain visible. Test all four features with repeated clicks and boundary cases. Check the browser Console and Network panels. Ask a classmate to test the live Render URL without your help.

## Sources and credits
- Original portfolio layout and code prepared for this project. Read and understand it before your practical defence.
- MDN learning resource: https://developer.mozilla.org/en-US/docs/Learn_web_development
- Sample image 1: laptop by Clément Hélardot, Unsplash https://unsplash.com/photos/95YRwf6CNw8 (photo-1517694712202-14dd9538aa97).
- Sample image 2: football image, Unsplash https://images.unsplash.com/photo-1574629810360-7efbbe195018.
- Sample image 3: library shelves, Unsplash https://images.unsplash.com/photo-1507842217343-583bb7270b66 (credit: Susan Q Yin).
- Unsplash licence: https://unsplash.com/license. Sample images are not claimed as personal photographs.
- Demo video title card and audio tone generated locally. No third-party recording or real voice is included.

## Checks performed on this package
JavaScript syntax, section anchor targets, HTML structure, local file references, JPEG headers, and audio/video codec metadata were checked. Automated visual browser checks could not run because the browser download was unavailable. Complete the browser and live Render checklist above before submission.
