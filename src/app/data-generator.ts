export function createRandomData(count: number): unknown[] {
  const firstNames = [
      'Nancy',
      'Andrew',
      'Janet',
      'Margaret',
      'Steven',
      'Michael',
      'Robert',
      'Laura',
      'Anne',
      'Nige',
    ],
    lastNames = [
      'Davolio',
      'Fuller',
      'Leverling',
      'Peacock',
      'Buchanan',
      'Suyama',
      'King',
      'Callahan',
      'Dodsworth',
      'White',
    ],
    cities = [
      'Seattle',
      'Tacoma',
      'Kirkland',
      'Redmond',
      'London',
      'Philadelphia',
      'New York',
      'Seattle',
      'London',
      'Boston',
    ],
    titles = [
      'Accountant',
      'Vice President, Sales',
      'Sales Representative',
      'Technical Support',
      'Sales Manager',
      'Web Designer',
      'Software Developer',
    ];

  return Array(count)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      title: titles[Math.floor(Math.random() * titles.length)],
    }));
}
