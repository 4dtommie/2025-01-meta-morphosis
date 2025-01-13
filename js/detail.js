const topicHeaders = document.querySelectorAll('.topic-header');

topicHeaders.forEach(header => {
  header.addEventListener('click', () => {

    let isActive = header.parentElement.classList.contains('active'); // Check if it's active
    if (!isActive) {
      topicHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove('active');
        }
      });
    }

    // Toggle the clicked item
    header.parentElement.classList.toggle('active');

    sa_event('click_topic_' + header.textContent);

  });
});