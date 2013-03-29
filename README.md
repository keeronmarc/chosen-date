Date select replacement using chosen.js and moment.js
--

We were not satisfied with the regular date selection widgets out there, so we wrote a quick wrapper
for chosen.js (using moment.js) to provide us with a way to select the date in as little as 2 keystrokes... rad!

Example:
--

```
<select data-placeholder="Choose date..." class="chzn-date"></select>
$('chzn-date').chosenDate();
```

.. that's it!

Requirements:
--
- chosen.js https://github.com/harvesthq/chosen
- moment.js https://github.com/timrwood/moment/


