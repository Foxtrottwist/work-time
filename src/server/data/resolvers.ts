const timers = [
  {
    title: 'web dev',
    duration: 2
  },
  {
    title: 'mobile app',
    duration: 3.5
  },
  {
    title: 'desktop dev',
    duration: 1
  }
];

const resolvers = {
  Query: { timers: () => timers }
};

export default resolvers;
