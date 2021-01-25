    const people = [
        {
            name: 'Michael',
            occupation: "boss"
        },
        {
            name: "Jim",
            occupation: "Sales"
        }
    ];

    const users = people.find(user => {
        return user.occupation === "boss"
    });
    console.log(users)
