import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useContextApp } from "@/context/useContextApp"
import { fetchFile } from "@/utils/dataFetch"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { SpinnerComp } from "./SpinnerComp"
import { useTranslation } from "react-i18next"

// const data =[

//     {    
//           Entity: "Africa",
//           Code: "",
//           Year: "1965",
//           "Renewables (% equivalent primary energy)": "5.7474947",
//           Other: "5.7474947",
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1966",
//           "Renewables (% equivalent primary energy)": "6.122062"
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1967",
//           "Renewables (% equivalent primary energy)": "6.325731"
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1968",
//           "Renewables (% equivalent primary energy)": "7.005293"
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1969",
//           "Renewables (% equivalent primary energy)": "7.9560876"
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1970",
//           "Renewables (% equivalent primary energy)": "9.16206"
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1970",
//           "Renewables (% equivalent primary energy)": "9.16206"
//     },
//     {
//           Entity: "Africa",
//           Code: "",
//           Year: "1970",
//           "Renewables (% equivalent primary energy)": "9.16206"
//     },
// ]

export function DataTable() {
  const [data, setData] = React.useState([
    {    
      Entity: "",
      Code: "",
      Year: "",
      "Renewables (% equivalent primary energy)": "",
    }
  ]);

  const [pageSize, setPageSize] = React.useState<number>(20);
  const [pageIndex, setPageIndex] = React.useState(0);

  const dataKeys = Object.keys(data[0]);

  const templateColumns: ColumnDef<typeof data[0]>[]= dataKeys.map((key)=>{
    return {
      accessorKey: key,
      header: ({ column }) => {
        return (
          <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {key}
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-center">{row.getValue(key)}</div>,
    }
  })

  const columns: ColumnDef<typeof data[0]>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    ...templateColumns
  ]
  
  const {selectedFile} = useContextApp();

  const keys = Object.keys(data[0]);
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [filterValue, setFilterValue] = React.useState<string>(keys[0])

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      const newPagination = typeof updater === "function" ? updater({ pageIndex, pageSize }) : updater;
      setPageIndex(newPagination.pageIndex);
      setPageSize(newPagination.pageSize);
    },
  })
  
  const handleMousedown = (size: number)=>{
    setPageSize(size)
  }

  const {t} = useTranslation();

  React.useEffect(()=>{
    fetchFile(selectedFile).then(data=>setData(data));
  },[selectedFile])
  

  return (
    <div data-testid='data-table' className="flex flex-col w-full md:h-[70rem] bg-background rounded-2xl p-5 mt-5 shadow-2xl text-[1.2rem]">
      <div className="flex flex-wrap justify-between py-4 gap-3">
        <div className="flex flex-wrap gap-3 text-[1.2rem]">   
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {t('data.table.filter.placeholder')} {filterValue} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="text-[1.2rem]">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      // checked={column.getIsVisible()}
                      onCheckedChange={()=>{
                  
                        setFilterValue(column.id);
                      }}
                      >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>     
          <Input
          placeholder={`${t('data.table.filter.placeholder')} ${filterValue}...`}
          value={(table.getColumn(filterValue)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(filterValue)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {t('data.table.show_columns')} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('data.table.show_rows.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t('data.table.show_rows.title')}</SelectLabel>
                {[10, 20, 30, 50, 100].map((size) => (
                  <SelectItem key={size} value={size + ''} onMouseDown={()=>handleMousedown(size)} >
                    {t('data.table.show_rows.show')} {size}
                  </SelectItem>
                ))}
              </SelectGroup>
          </SelectContent>

        </Select>
      </div>
      <div className="rounded-md border overflow-y-scroll h-full">
        <Table className=" bg-app-secondary-background">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="relative">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-[1.2rem]"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {data.length === 1 && <SpinnerComp className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center"/> }
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {t('data.table.footer.legend.desc', {
            selected: table.getFilteredSelectedRowModel().rows.length,
            total: table.getFilteredRowModel().rows.length
          })}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex(prev=> prev -1)}
            disabled={!table.getCanPreviousPage()}
            className="text-[1.2rem]"
          >
            {t('data.table.footer.prev')}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex(prev=>prev + 1)}
            disabled={!table.getCanNextPage()}
            className="text-[1.2rem]"
            
          >
            {t('data.table.footer.next')}
          </Button>
        </div>
      </div>
    </div>
  )
}
