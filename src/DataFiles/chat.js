import {
    person1,
    person2,
    person3,
    person11,
    person12,
    person13,
    person14,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10
} from './image.js'

export const dataProfile = {
    chatGroups: [
      {
        id: 1,
        groupName: "SMJ Law Firm",
        persons: [
          {
            id: 1,
            name: "Madel",
            img: person11, 
            message: "I update the calendar and re-reschedule your new hearing Atty. Mansalas."
          },
          {
            id: 2,
            name: "Atty. Raphael",
            img: person12,
            message: "Noted. Thank you."
          },
          {
            id: 3,
            name: "Atty.Marvin",
            img: person13,
            message: "I can't attach any files on my schedule calendar. Anyone in the support can help me for this?",
            message2: "Thank you."
          },
          {
            id: 4,
            name: "Christine Joy",
            img: person14,
            message: "Me too. I can't update the following details in y schedule."
          }
        ],
      response: [
        "Noted Atty. We Will fix it as soon as possible",
        "We understand the inconvenience caused and assure you that our team is actively working to accomodate and resolve the problem. Your patience is highly appreciated."
      ]
      },
      {
        id: 2,
        groupName: "Mansala Law Firm",
        persons: [
          {
            id: 4,
            name: "Person 4",
            img: person2,
            message: "Message 1 for Person 4"
          },
          {
            id: 5,
            name: "Person 5",
            img: "person5.jpg",
            message: "Message 1 for Person 5"
          },
          {
            id: 6,
            name: "Person 6",
            img: "person6.jpg",
            message: "Message 1 for Person 6"
          }
        ]
      },
      {
        id: 3,
        groupName: "GPA Law Firm",
        persons: [
          {
            id: 7,
            name: "Person 7",
            img: person3,
            message: "Message 1 for Person 7"
          },
          {
            id: 8,
            name: "Person 8",
            img: "person8.jpg",
            message: "Message 1 for Person 8"
          },
          {
            id: 9,
            name: "Person 9",
            img: "person9.jpg",
            message: "Message 1 for Person 9"
          }
        ]
      }
    ]
  };

  
  export const dataOptions = {
    Option1: [
      {
        name: "Customize chat",
        options:[
          {
            name: "Change chat name",
            icon: icon1
          },
          {
            name: "Change photo",
            icon: icon2
          },
          {
            name: "Change theme",
            icon: icon3
          },
          {
            name: "Change emoji",
            icon: icon4
          },
          {
            name: "Edit nicknames",
            icon: icon5
          }
        ]
      }
    ],
    Option2: [
      {
        name: "Media and Files",
        options:[{
          name: "Media",
          icon: icon6
        },
        {
          name: "Files",
          icon: icon2
        },
        {
          name: "Links",
          icon: icon7
        }
        ]
      }
    ],
    Option3: [
      {
        name: "Privacy and Support",
        options:[
          {
            name: "Mute notifications",
            icon: icon8
          },
          {
            name: "Report",
            icon: icon9
          },
          {
            name: "Leave group",
            icon: icon10
          }
        ]
      }
    ]
  };