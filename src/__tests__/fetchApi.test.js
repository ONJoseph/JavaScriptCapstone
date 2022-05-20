import commentsData from '../__mocks__/commentsMock.js';
import commentsCounter from '../commentsCounter.js';

describe('Testing if the comments are retrieved from the Involvement API excellently', () => {
  test('Testing if comments counter function is working', () => {
    // Arrange...
    const commentsArray = commentsData;
    // Act...
    const response = commentsCounter(commentsArray);
    // Assert...
    expect(response.length).toBe(5);
  });

  test('Check that the first comments is from the user with username "Joseph"', () => {
    // Arrange...
    const commentsArray = commentsData;
    // Act...
    const response = commentsCounter(commentsArray);
    // Assert...
    expect(response[0].username).toBe('Joseph');
  });
});