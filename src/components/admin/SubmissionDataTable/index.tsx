import type { ArrayFieldServerComponent } from 'payload'

type SubmissionRow = {
  field?: string | null
  value?: unknown
}

const SubmissionDataTable: ArrayFieldServerComponent = ({ value }) => {
  const rows = (value as SubmissionRow[] | undefined) ?? []

  if (rows.length === 0) {
    return <p>No submission data.</p>
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
            Field
          </th>
          <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td
              style={{ borderBottom: '1px solid #eee', fontWeight: 600, padding: '8px' }}
            >
              {row.field}
            </td>
            <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>
              {String(row.value ?? '')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SubmissionDataTable
