export interface FetchFutbolistasResponse {
  content:          Futbolista[];
  pageable:         Pageable;
  last:             boolean;
  totalElements:    number;
  totalPages:       number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface Futbolista {
  id:              number;
  name:            string;
  lastName:        string;
  birthDate:       Date;
  characteristics: string;
  positions:       Position[];
}

export interface Position {
  id:   number;
  name: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
