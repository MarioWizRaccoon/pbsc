const addPerson = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      let newPerson = false;

      state.map(person =>
        person.personUuid === action.personUuid ? none : (newPerson = true)
      );

      if (newPerson) {
        return [
          ...state,
          {
            id: action.id,
            personUuid: action.personUuid
          }
        ]
      } else {
        return [
          state.map(person =>
            person.personUuid === action.personUuid ? {... person, count: action.count} : person
          )
        ]
      }

    case 'LOAD_PERSON':
      return state
  }
};

export default addPerson