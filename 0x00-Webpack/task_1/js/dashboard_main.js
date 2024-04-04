import $ from 'jquery';
import _ from 'lodash';

// Function to update counter
function updateCounter() {
    let count = 0;
    return function() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };
}

// Initialize debounce function with a delay of 500 milliseconds
const debouncedUpdateCounter = _.debounce(updateCounter(), 500);

// Add elements to the DOM
$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Add click event listener to the button
    $('#start-btn').on('click', function() {
        debouncedUpdateCounter();
    });
});

