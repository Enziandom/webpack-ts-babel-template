function entry(msg: string, onEntry: (msg: string) => void): void {
  onEntry(msg);
}

entry("Hello World!", (e) => {
  console.log(e);
});

interface OnEnter {
  (msg: string): void;
}

function enter(msg: string, onEnter: OnEnter) {
  onEnter(msg);
}

enter("Hello World!", (e) => {
  console.log(e);
});