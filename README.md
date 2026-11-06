# Virtual Dog Park

A beginner-friendly dog encyclopedia and virtual pet website built with plain
HTML, CSS, and vanilla JavaScript.

## Features

- **Dog Encyclopedia**: three breeds (Beagle, Golden Retriever, Poodle) with
  short notes about size, personality, and everyday care.
- **Original SVG illustrations**: one locally created SVG drawing per breed,
  stored in the `assets/` folder.
- **My Virtual Dog**: choose a breed, enter a dog name, and adopt it.
- **Care actions**: Feed and Play each add 10 happiness, up to a maximum of 100.
- **Growth**: Next Day advances the day and updates the growth stage.
- **Saved progress**: the adopted dog is kept in the browser's localStorage.

## Preview

1. Open the project folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The browser opens `http://127.0.0.1:5500`.

Use the local server address, not a `file://` address, because browser storage
behaves differently for `file://` pages.

## Growth and happiness rules

| Day | Growth stage |
| --- | --- |
| 1 | Puppy |
| 2-3 | Young Dog |
| 4 and later | Adult Dog |

- A new dog starts on Day 1, at the Puppy stage, with happiness 50.
- Feed and Play each add 10 happiness, up to a maximum of 100.
- Next Day adds 1 to the day and subtracts 5 happiness, never below 0.

## Where saved progress lives

The adopted dog (name, breed, day, and happiness) is stored in the browser's
**localStorage** under the key `virtualDogParkPetV1`.

This means:

- Progress lives **on this browser and device**, not in a GitHub account.
- Clearing browser data, switching browsers, or opening a different address
  (such as `file://`) shows the empty adoption form again.

## Manual testing checklist

- [ ] Adopt a dog; it appears with Day 1, Puppy, and 50 happiness.
- [ ] Feed and Play add 10 happiness and stop at 100.
- [ ] Next Day adds a day and subtracts 5 happiness, never below 0.
- [ ] The growth bar shows three clearly different widths for Puppy, Young
      Dog, and Adult Dog.
- [ ] Refresh the page; the same dog, day, and happiness come back.
- [ ] Start Over asks for confirmation; Cancel keeps the dog.
- [ ] Confirm deletes the saved dog and returns to the adoption form.
- [ ] The Dog Encyclopedia still shows all three breeds with illustrations.
- [ ] A narrow browser window stacks the cards with no horizontal scrolling.
- [ ] The browser console shows no errors.

## Notes

- All three dog illustrations are original SVG drawings created for this
  project, not photographs of real dogs.
- The site uses no framework, no backend, no external API, and no package
  manager.
