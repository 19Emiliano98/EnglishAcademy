import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material"

interface ParentProps{
  dataItems: string[];
}

const ListItems: React.FC<ParentProps> = ( dataItems:ParentProps ) => {
  const arrayParent = dataItems.dataItems

  return (
    <>
      {
        arrayParent.map( ( x, index ) => 
          <ListItem>
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                <Box 
                  sx={{ 
                    width: '15px', height: '15px', 
                    backgroundColor: '#FFA500', borderRadius: '50%'
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={ x } sx={{ ml: -2.5 }}/>
            </Box>
          </ListItem>
        )
      }
    </>
  )
}

export default ListItems