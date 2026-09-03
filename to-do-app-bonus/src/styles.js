export const styles = {
  form: "flex w-full max-w-100 flex-col gap-4",
  formRow: "flex flex-col gap-1.5",
  label: "text-xs tracking-widest text-muted uppercase",
  input:
    "rounded-md border border-line bg-white px-3 py-2.5 text-[0.95rem] text-ink " +
    "outline-none transition focus:border-brand focus:ring-[3px] focus:ring-brand-light",
  btn:
    "cursor-pointer rounded-md bg-brand px-5 py-2 text-sm font-medium text-white " +
    "text-center no-underline transition hover:bg-brand-dark",
  btnSmall: "px-3.5 py-1.5 text-xs",
  cancelLink: "self-center text-sm text-muted no-underline transition hover:text-accent",
  section: "flex w-full max-w-100 flex-col gap-2",
  head: "mt-6 flex items-center justify-between gap-4 border-b border-line pb-2.5",
  header: "text-lg font-semibold text-accent",
  list: "w-full list-none p-0",
  empty: "py-8 text-center text-sm text-muted",
  item: "group flex items-center justify-between gap-4 border-b border-line px-1 py-2.5",
  itemLabel:
    "flex cursor-pointer items-center gap-2.5 text-[0.95rem] " +
    "has-checked:text-muted has-checked:line-through",
  checkbox: "h-4 w-4 cursor-pointer accent-brand",
  deleteBtn:
    "cursor-pointer px-2 py-1 text-xs text-muted opacity-0 transition " +
    "group-hover:opacity-100 hover:text-danger",
}