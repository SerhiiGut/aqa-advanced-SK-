import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./Config/endpoints.js";
import { TEST_DATA } from "./Config/test_data.js";

const api = axios.create({
baseURL: BASE_URL,
});

api.interceptors.request.use(
(request) => {
console.log(
`[REQUEST] ${request.method.toUpperCase()} ${request.baseURL}${request.url}`
);

if (request.data) {
  console.log("Request Body:", request.data);
}

return request;

},
(error) => {
console.error("[REQUEST ERROR]", error);
return Promise.reject(error);
}
);


api.interceptors.response.use(
(response) => {
console.log(
`[RESPONSE] ${response.status} ${response.config.url}`
);

console.log("Response Data:", response.data);

return response;


},
(error) => {
if (error.response) {
console.error(
`[RESPONSE ERROR] ${error.response.status}`
);
console.error(error.response.data);
}

return Promise.reject(error);


}
);

let userId;
let token;

test("GET all books", async () => {
  const response = await api.get(ENDPOINTS.BOOKS);

  expect(response.status).toBe(200);
  expect(response.data.books.length).toBeGreaterThan(0);
});

test("GET book by ISBN", async () => {
  const response = await api.get(ENDPOINTS.BOOK, {
    params: {
      ISBN: TEST_DATA.GIT_POCKET_GUIDE,
    },
  });

  expect(response.status).toBe(200);
  expect(response.data.isbn).toBe(
    TEST_DATA.GIT_POCKET_GUIDE
  );
});

test("POST create user", async () => {
  const response = await api.post(
    ENDPOINTS.CREATE_USER,
    TEST_DATA.USER
  );

  expect(response.status).toBe(201);

  expect(response.data).toHaveProperty("userID");

  userId = response.data.userID;
});

test("POST login", async () => {
  const response = await api.post(
    ENDPOINTS.LOGIN,
    TEST_DATA.USER
  );

  expect(response.status).toBe(200);

  expect(response.data).toHaveProperty("token");

  token = response.data.token;
});

test("POST add book", async () => {
  expect(userId).toBeDefined();
  expect(token).toBeDefined();

  const response = await api.post(
    ENDPOINTS.ADD_BOOKS,
    {
      userId,
      collectionOfIsbns: [
        {
          isbn: TEST_DATA.GIT_POCKET_GUIDE,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  expect(response.status).toBe(201);
});