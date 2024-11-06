
import NotificationCard from '../../components/AdminComponents/NotificationCard';

const Notifications = () => {
  return (
    <div className="p-4 text-lg">
      <NotificationCard id={1} message="Low stock : Chili Pepper Seed" type="warning" isRead={false} timestamp= '2024-11-05 10:00 AM' />
      <NotificationCard id={2} message="New message from Supplier Y" type="info" isRead={true}  timestamp= '2024-11-03 08:00 PM'/>
    </div>
  );
};

export default Notifications;



