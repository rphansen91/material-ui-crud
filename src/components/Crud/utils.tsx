export function pluralize(str: string) {
  if (!str) return "";
  if (str[str.length - 1] === "s") return str;
  return `${str}s`;
}

export function selectFindData(typeName: string, data: any) {
  return data?.[`find${pluralize(typeName)}`]?.data ?? [];
}

export function selectFindTotal(typeName: string, data: any) {
  return data?.[`find${pluralize(typeName)}`]?.total ?? 0;
}

export function selectInsertCacheWrite(
  typeName: string,
  prev: any,
  result: any
) {
  const findField = `find${pluralize(typeName)}`;
  const inserted = result?.data?.[`insert${typeName}`];
  if (!inserted) return null;
  const prevResult = prev?.[findField];
  const prevData = prevResult?.data ?? [];
  const newData = [].concat(prevData, inserted);
  return {
    [findField]: {
      ...prevResult,
      data: newData,
    },
  };
}

export function selectRemoveManyCacheWrite(
  typeName: string,
  prev: any,
  ids: string[],
  idField = "id"
) {
  const findField = `find${pluralize(typeName)}`;
  const prevResult = prev?.[findField];
  const prevData = prevResult?.data ?? [];
  const newData = prevData.filter((v: any) => !ids.includes(v?.[idField]));
  return {
    [findField]: {
      ...prevResult,
      data: newData,
    },
  };
}

export function selectRemoveCacheWrite(
  typeName: string,
  prev: any,
  id: string,
  idField = "id"
) {
  const findField = `find${pluralize(typeName)}`;
  const prevResult = prev?.[findField];
  const prevData = prevResult?.data ?? [];
  const newData = prevData.filter((v: any) => !id !== v?.[idField]);
  return {
    [findField]: {
      ...prevResult,
      data: newData,
    },
  };
}
