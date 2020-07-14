import { ComponentType } from "react";

export * from "./Search";
export type SetFormValue<V> = (k: keyof V, v: string) => any;

export type FormComponent<V> = ComponentType<{
  values?: V | null;
  onSubmit: () => any;
  setValue: (k: keyof V, v: any) => any;
}>;
