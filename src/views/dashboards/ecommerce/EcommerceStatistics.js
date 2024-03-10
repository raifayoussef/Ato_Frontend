// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
  {
    stats: '19',
    title: 'Total Offices',
    color: 'primary',
    icon: 'tabler:building-skyscraper'
  },
  {
    color: 'info',
    stats: '9',
    title: 'Total Teams',
    icon: 'tabler:user-cog'
  },
  {
    color: 'primary',
    stats: '9',
    title: 'Total Teams',
    icon: 'tabler:users-group'
  },
  {
    stats: '9',
    color: 'success',
    title: 'Total Teams',
    icon: 'tabler:clock'
  }
]

const renderStats = () => {
  return data.map((sale, index) => (
    <Grid item xs={6} md={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 72, height: 72 }}>
          <Icon icon={sale.icon} fontSize='3rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const EcommerceStatistics = () => {
  return (
    <Card>
      <CardHeader title='Statistics' sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }} />
      <CardContent
        sx={{ pt: theme => `${theme.spacing(7)} !important`, pb: theme => `${theme.spacing(7.5)} !important` }}
      >
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EcommerceStatistics
