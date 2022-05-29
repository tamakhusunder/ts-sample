interface iContactPayload {
  id: string;
  name: string;
  number: number;
  address: string;
  created_at: string;
  updated_at: string;
}

export const STATIC_CONTACTS: iContactPayload[] = [
  {
    id: "1",
    name: "Contact 1",
    number: 9999999991,
    address: "Bhaktapur",
    created_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
    updated_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
  },
  {
    id: "2",
    name: "Contact 2",
    number: 9999999992,
    address: "Bhaktapur",
    created_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
    updated_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
  },
  {
    id: "3",
    name: "Contact 3",
    number: 9999999993,
    address: "Bhaktapur",
    created_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
    updated_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
  },
  {
    id: "4",
    name: "Contact 4",
    number: 9999999994,
    address: "Bhaktapur",
    created_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
    updated_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
  },
  {
    id: "5",
    name: "Contact 5",
    number: 9999999995,
    address: "Bhaktapur",
    created_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
    updated_at: "Mon May 23 2022 23:42:59 GMT+0545 (Nepal Time)",
  },
];
