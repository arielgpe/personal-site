export  interface IPagination<T> {
  totalPages: number;
  currentPage: number;
  paginatedPosts: T[];
}
