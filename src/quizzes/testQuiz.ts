import type { QuizObjType } from '../types/QuizObj.js'

export const testQuiz: QuizObjType = [{
  question: 'Testowe pytanie pierwsze',
  answers: [{
    type: 'button',
    options: {
      content: 'false',
    },
    isWinner: false
  }, {
    type: 'button',
    options: {
      content: 'false'
    },
    isWinner: false
  }, {
    type: 'button',
    options: {
      content: 'false'
    },
    isWinner: false
  }, {
    type: 'button',
    options: {
      content: 'false'
    },
    isWinner: false
  }]
}, 
{
  question: 'Testowe pytanie dwa',
  answers: [{
    type: 'button',
    options: {
      content: 'true'
    },
    isWinner: true
  }, {
    type: 'button',
    options: {
      content: 'true'
    },
    isWinner: true
  }, {
    type: 'button',
    options: {
      content: 'true'
    },
    isWinner: true
  }, {
    type: 'button',
    options: {
      content: 'true'
    },
    isWinner: true
  }]
}, 
{
  question: 'testowe pytanie 3',
  answers: [{
    type: 'button',
    options: {
      content: 'true'
    },
    isWinner: true
  }, {
    type: 'button',
    options: {
      content: 'false'
    },
    isWinner: false
  }, {
    type: 'button',
    options: {
      content: 'true'
    },
    isWinner: true
  }, {
    type: 'button',
    options: {
      content: 'false'
    },
    isWinner: false
  }]
}]