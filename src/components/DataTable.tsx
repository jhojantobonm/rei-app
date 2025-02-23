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
import { ArrowUpDown, ChevronDown, Key } from "lucide-react"

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


const data: FileData01[] =[

    {    
          Entity: "Africa",
          Code: "",
          Year: "1965",
          "Renewables (% equivalent primary energy)": "5.7474947"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1966",
          "Renewables (% equivalent primary energy)": "6.122062"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1967",
          "Renewables (% equivalent primary energy)": "6.325731"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1968",
          "Renewables (% equivalent primary energy)": "7.005293"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1969",
          "Renewables (% equivalent primary energy)": "7.9560876"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1970",
          "Renewables (% equivalent primary energy)": "9.16206"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1970",
          "Renewables (% equivalent primary energy)": "9.16206"
    },
    {
          Entity: "Africa",
          Code: "",
          Year: "1970",
          "Renewables (% equivalent primary energy)": "9.16206"
    },
  ]


export type FileData01 = {
  Entity: string,
  Code: string,
  Year: string,
  "Renewables (% equivalent primary energy)": string,
}

export const columns: ColumnDef<FileData01>[] = [
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
  {
    accessorKey: "Entity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Entity
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("Entity")}</div>,
  },
  {
    accessorKey: "Code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Code
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="uppercase text-center">{row.getValue("Code")}</div>,
  },
  {
    accessorKey: "Year",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Year
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("Year")}</div>,
  },
  {
    accessorKey: "Renewables",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {'Renewables (% equivalent primary energy)'}
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("Renewables")}</div>,
  },
  
]

export function DataTable() {
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
    },
  })

  return (
    <div data-testid='data-table' className="flex flex-col w-full md:h-[70rem] bg-white rounded-2xl p-5 mt-5 shadow-2xl">
      <div className="flex flex-wrap justify-between py-4 gap-3">
        <div className="flex flex-wrap gap-3">   
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Filter by {filterValue} <ChevronDown />
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
          placeholder={`Filter by ${filterValue}...`}
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
                Show columns <ChevronDown />
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

      </div>
      <div className="rounded-md border overflow-y-scroll h-full">
        <Table>
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
          <TableBody>
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
