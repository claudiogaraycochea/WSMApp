/*export const menu = [
  { 
    id: 1,
    title: 'Appointments',
    data: {
      firstname: 'Samuel',
      lastname: 'Tompson',
      whatsapp: '+34932209092',
      email: 'medical@email.com'
    }
  }
];*/
export const menu = [
  { 
    id: 1,
    title: 'Appointments',
    menu: [
      {
        id: 1,
        title: 'Medical',
        menu: [
          {
            id: 1,
            title: 'Check-up',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              whatsapp: '+34932209092',
              email: 'medical@email.com'
            }
          },
          {
            id: 2,
            title: 'Football Injuries',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              whatsapp: '+34932209092',
              email: 'medical@email.com'
            }
          }
        ]
      },
      {
        id: 2,
        title: 'Therapy',
        menu: [
          {
            id: 1,
            title: 'Physiotherapy',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              whatsapp: '+34932209092',
              email: 'medical@email.com'
            }
          },
          {
            id: 2,
            title: 'Cryotherapy',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              whatsapp: '+34932209092',
              email: 'medical@email.com'
            }
          },
          {
            id: 3,
            title: 'Psychologist',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              whatsapp: '+34932209092',
              email: 'medical@email.com'
            }
          }
        ]
      },
      {
        id: 3,
        title: 'Massage',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 4,
        title: 'Nutritionist',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      }
    ]
  },
  { 
    id: 2,
    title: 'Football',
    menu: [
      {
        id: 1,
        title: 'Equipment',
        menu: [
          {
            id: 1,
            title: 'Shoes',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 2,
            title: 'Other gears',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          }
        ]
      },
      {
        id: 2,
        title: 'Mental Coach',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 3,
        title: 'Training',
        menu: [
          {
            id: 1,
            title: 'Personal Training (fitness)',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 2,
            title: 'Skills Training',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 3,
            title: 'Hypoxie',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          }
        ]
      }
    ]
  },
  { 
    id: 3,
    title: 'Concierge Extra Services',
    menu: [
      {
        id: 1,
        title: 'Leisure/Holidays',
        menu: [
          {
            id: 1,
            title: 'Transportation',
            menu: [
              {
                id: 1,
                title: 'Flights',
                menu: [
                  {
                    id: 1,
                    title: 'Commercial',
                    data: {
                      firstname: 'Samuel',
                      lastname: 'Tompson',
                      email: 'medical@email.com',
                      whatsapp: '+34932209092'
                    }
                  },
                  {
                    id: 2,
                    title: 'Private',
                    data: {
                      firstname: 'Samuel',
                      lastname: 'Tompson',
                      email: 'medical@email.com',
                      whatsapp: '+34932209092'
                    }
                  }
                ]
              },
              {
                id: 2,
                title: 'Train',
                data: {
                  firstname: 'Samuel',
                  lastname: 'Tompson',
                  email: 'medical@email.com',
                  whatsapp: '+34932209092'
                }
              },
              {
                id: 3,
                title: 'Car',
                data: {
                  firstname: 'Samuel',
                  lastname: 'Tompson',
                  email: 'medical@email.com',
                  whatsapp: '+34932209092'
                }
              },
              {
                id: 4,
                title: 'Boat/Yacht',
                data: {
                  firstname: 'Samuel',
                  lastname: 'Tompson',
                  email: 'medical@email.com',
                  whatsapp: '+34932209092'
                }
              }
            ]
          },
          {
            id: 2,
            title: 'Accommodation',
            menu: [
              {
                id: 1,
                title: 'Hotel',
                data: {
                  firstname: 'Samuel',
                  lastname: 'Tompson',
                  email: 'medical@email.com',
                  whatsapp: '+34932209092'
                }
              },
              {
                id: 2,
                title: 'Appartement',
                data: {
                  firstname: 'Samuel',
                  lastname: 'Tompson',
                  email: 'medical@email.com',
                  whatsapp: '+34932209092'
                }
              },
              {
                id: 3,
                title: 'Villa',
                data: {
                  firstname: 'Samuel',
                  lastname: 'Tompson',
                  email: 'medical@email.com',
                  whatsapp: '+34932209092'
                }
              }
            ]
          },
          {
            id: 3,
            title: 'Restaurants',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 4,
            title: 'Activities',
            menu: [
              {
                id: 1,
                title: 'Daylife',
                menu: [
                  {
                    id: 1,
                    title: 'Beach Clubs',
                    data: {
                      firstname: 'Samuel',
                      lastname: 'Tompson',
                      email: 'medical@email.com',
                      whatsapp: '+34932209092'
                    }
                  },
                  {
                    id: 2,
                    title: 'Excursions',
                    data: {
                      firstname: 'Samuel',
                      lastname: 'Tompson',
                      email: 'medical@email.com',
                      whatsapp: '+34932209092'
                    }
                  }
                ]
              },
              {
                id: 2,
                title: 'Nightlife',
                menu: [
                  {
                    id: 1,
                    title: 'Nightclubs',
                    data: {
                      firstname: 'Samuel',
                      lastname: 'Tompson',
                      email: 'medical@email.com',
                      whatsapp: '+34932209092'
                    }
                  },
                  {
                    id: 2,
                    title: 'Bars',
                    data: {
                      firstname: 'Samuel',
                      lastname: 'Tompson',
                      email: 'medical@email.com',
                      whatsapp: '+34932209092'
                    }
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Household Services',
        menu: [
          {
            id: 1,
            title: 'House Cleaning',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 2,
            title: 'Cooking',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 3,
            title: 'Laundry',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 4,
            title: 'Gardening',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          }
        ]
      }
    ]
  },
  { 
    id: 4,
    title: 'Relocation',
    menu: [
      {
        id: 1,
        title: 'Moving Van',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 2,
        title: 'Renting',
        menu: [
          {
            id: 1,
            title: 'Appartement',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 2,
            title: 'House',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          }
        ]
      },
      {
        id: 3,
        title: 'Buying',
        menu: [
          {
            id: 1,
            title: 'Appartement',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 2,
            title: 'House',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          }
        ]
      },
      {
        id: 4,
        title: 'Temporary Accommodation',
        menu: [
          {
            id: 1,
            title: 'Appartement',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          },
          {
            id: 2,
            title: 'House',
            data: {
              firstname: 'Samuel',
              lastname: 'Tompson',
              email: 'medical@email.com',
              whatsapp: '+34932209092'
            }
          }
        ]
      }
    ]
  },
  { 
    id: 5,
    title: 'Administrative',
    menu: [
      {
        id: 1,
        title: 'Legal Assistance',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 2,
        title: 'Taxation',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 3,
        title: 'Insurances',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 4,
        title: 'Car',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      }
    ]
  },
  { 
    id: 6,
    title: 'Marketing & Communication',
    menu: [
      {
        id: 1,
        title: 'Sponsoring/Brand Deals',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 2,
        title: 'Events',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 3,
        title: 'Social Media',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 4,
        title: 'Media Training',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 5,
        title: 'Upload Documents',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      },
      {
        id: 6,
        title: 'Other Requests',
        data: {
          firstname: 'Samuel',
          lastname: 'Tompson',
          email: 'medical@email.com',
          whatsapp: '+34932209092'
        }
      }
    ]
  }
];
