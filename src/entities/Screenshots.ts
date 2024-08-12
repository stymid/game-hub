import Screenshot from "./ScreenShot";

export default interface Screenshots {
  count: number;
  next: string;
  previous: string;
  results: Screenshot[];
}
