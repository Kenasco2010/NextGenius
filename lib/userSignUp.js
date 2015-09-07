AccountsTemplates.addField({
    _id: "userType",
    type: "select",
    required: false,
    displayName: "Type of User",
    select: [
        {
            text: "Player",
            value: "player",
        },
        {
            text: "Agent/Scout",
            value: "agentOrScout",
        },
        {
            text: "Clubs/School",
            value: "clubsOrSchool",
        },
    ],
});