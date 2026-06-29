import { createContactCardResponse } from "~/utils/contact-response";

export function loader() {
  return createContactCardResponse();
}
