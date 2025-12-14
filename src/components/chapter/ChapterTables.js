import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
const ChapterTables = ({
  tables
}) => {
  if (!tables || tables.length === 0) {
    return <div className="text-center py-12 text-muted-foreground">
        אין טבלאות זמינות לפרק זה
      </div>;
  }
  return <div className="space-y-8">
      {tables.map((table, index) => <div key={index}>
          <h3 className="text-xl font-bold mb-4">{table.title}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">מידה אמריקאית</TableHead>
                <TableHead className="text-right">מידה ישראלית</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.data.map((row, rowIndex) => <TableRow key={rowIndex}>
                  <TableCell className="font-medium text-right">{row.american}</TableCell>
                  <TableCell className="text-right">{row.hebrew}</TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </div>)}
    </div>;
};
export default ChapterTables;