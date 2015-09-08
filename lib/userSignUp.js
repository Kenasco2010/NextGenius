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
            value: "agentorscout",
        },
        {
            text: "Scout",
            value: "scout",
        },
        {
            text: "Clubs/Academy",
            value: "clubsOracademy",
        },
    ],
});
