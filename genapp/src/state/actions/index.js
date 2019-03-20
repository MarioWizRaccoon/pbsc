let nextPersonId = 0;
let interestOneUp = 0;

export const yesInterest = personUuid => ({
  type: 'ADD_PERSON',
  id: nextPersonId++,
  count: interestOneUp++,
  personUuid
});

export const noInterest = () => ({
  type: 'LOAD_PERSON',
});

