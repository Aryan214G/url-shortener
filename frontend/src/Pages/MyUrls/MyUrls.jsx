import React, {useEffect, useState} from 'react'
import Service from '../../utils/http';
import { Anchor, Table, Text} from '@mantine/core';

const MyUrls = () => {
    const service = new Service();
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await service.get("user/my/urls");
            setData(response.shortURLs);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        <Table striped highlightOnHover withColumnBorders>

            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Title</Table.Th>
                    <Table.Th>Original URL</Table.Th>
                    <Table.Th>Short URL</Table.Th>
                    <Table.Th>Active</Table.Th>
                    <Table.Th>Clicks</Table.Th>
                    <Table.Th>Created At</Table.Th>
                    <Table.Th>Expiry Date</Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
                {data && data.map((d) => (
                    <Table.Tr Key={d._id}>

                        <Table.Td>
                            <Text>{d?.title || "NA"}</Text>
                        </Table.Td>

                        <Table.Td>
                            <Anchor href={d?.originalUrl} target="_blank" rel="noopener noreferrer">
                                {d?.originalUrl}
                            </Anchor>
                        </Table.Td>

                        <Table.Td>
                            <Text>{d?.shortCode}</Text>
                        </Table.Td>

                        <Table.Td>
                            <Text>{d?.isActive ? "Yes" : "No"}</Text>
                        </Table.Td>

                        <Table.Td>
                            <Text>{d?.clickCount || 0}</Text>
                        </Table.Td>

                        <Table.Td>
                            <Text>{new Date(d?.createdAt).toLocaleDateString()}</Text>
                        </Table.Td>

                        <Table.Td>
                            <Text>{new Date(d?.expiresAt).toLocaleDateString()}</Text>
                        </Table.Td>

                    </Table.Tr>
                ))}
            </Table.Tbody>

        </Table>
    </div>
  )
}

export default MyUrls