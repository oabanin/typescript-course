const destinations =  [
{
        lat: 39.39987199999999,
        lng: -8.224454,
      },
{
        lat: 39.39987199999999,
        lng: -8.224454,
      },
{
        lat: 39.39987199999999,
        lng: -8.224454,
      },
      {
        lat: 38.92929780000001,
        lng: -9.228679,
      },
      {
        lat: 35.4436739,
        lng: 139.6379639,
      }];

destinations.filter(
        (value, index, self) =>
           index === self.findIndex((t) => t?.lat === value?.lat && t?.lng === value?.lng),
       );
