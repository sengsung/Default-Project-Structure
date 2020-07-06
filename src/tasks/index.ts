import schedule from 'node-schedule';

const scheduleJobConfigs = [
  // {
  //   title: 'testSchedule',
  //   desc: 'Updating petitions',
  //   rule: '0 0 1 * * *',
  //   run: testFunction,
  // },
];

const scheduleJobs: schedule.Job[] = [];

for (const e of scheduleJobConfigs) {
  scheduleJobs.push(
    schedule.scheduleJob(e.rule, async () => {
      console.log(`${e.desc}..!`);
      try {
        await e.run();
        console.log(`${e.desc} complete!`);
      } catch (err) {
        console.log(`${e.desc} has occurred error..`);
        console.log(err);
        console.log(`${e.desc} Failed :(`);
      }
    }),
  );
}
