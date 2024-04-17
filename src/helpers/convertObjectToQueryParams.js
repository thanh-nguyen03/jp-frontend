export default function convertObjectToQueryParams(obj) {
  const sortModel = obj?.sortModel ?? [{ field: "id", sort: "asc" }];

  const filter = {
    page: obj?.page ?? 0,
    pageSize: obj?.pageSize ?? 10,
    sort: sortModel.map((item) => `${item.field}:${item.sort}`).join(","),
    ...obj,
  };

  delete filter?.sortModel;

  return Object.keys(filter)
    .map((key) => `${key}=${filter[key]}`)
    .join("&");
}
