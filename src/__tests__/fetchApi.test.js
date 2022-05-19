import mockData from '../__mocks__/movieMock.js';
import commentsData from '../__mocks__/commentsMock.js';
import { getMoviez } from '../fetchAPI.js';
import commentsCounter from '../commentsCounter.js';

describe('Testing if the moviez are retrieved from API excellently', () => {
  test('Testing if item counter function is working', () => {
    // Arrange...
    const movieArray = mockData;
    // Act...
    const response = getMoviez(movieArray);
    // Assert...
    expect(response.length).toBe(4);
  });

  test('Check if movie title is the same', () => {
    // Arrange...
    const likeArray = mockData;
    // Act...
    const response = getMoviez(likeArray);
    // Assert...
    expect(response[0].name).toBe('Under the Dome');
  });
});

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